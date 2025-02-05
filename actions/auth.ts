"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export async function getUserSession() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    return null;
  }
  return {
    status: "success",
    user: data?.user,
  };
}
export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const credentials = {
    fullName: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: { full_name: credentials.fullName }, // Storing full_name as user metadata
    },
  });

  if (error) {
    return { status: error?.message, user: null };
  } else if (data?.user?.identities?.length === 0) {
    return {
      status: "Email already exists",
      user: null,
    };
  }

  revalidatePath("/", "layout");
  redirect("/login");
  return {
    staus: "success",
    user: data?.user,
  };
}

export async function singIn(formData: FormData) {
  const supabase = await createClient();

  const credentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    return {
      status: error.message,
      user: null,
    };
  }

  // create user instance in db
  const { data: existingUser } = await supabase
    .from("profile")
    .select("*")
    .eq("email", credentials.email)
    .limit(1)
    .single();

  if (!existingUser) {
    const { error: insertError } = await supabase.from("profile").insert({
      email: data?.user?.email,
      full_name: data?.user?.user_metadata?.full_name,
    });
    if (insertError) {
      return {
        status: insertError?.message,
        User: null,
      };
    }
  }

  revalidatePath("/", "layout");
  return {
    status: "success",
    user: data?.user,
  };
}

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}

export const googleauth = async () => {
  const origin = (await headers()).get("origin");
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
  if (error) {
    redirect("/error");
  } else if (data.url) {
    return redirect(data.url);
  }
};
