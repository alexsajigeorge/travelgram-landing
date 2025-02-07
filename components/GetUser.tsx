import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const GetUser = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div>
      <Avatar>
        <AvatarImage src={data?.user?.user_metadata?.picture} />
        <AvatarFallback>{data?.user?.user_metadata?.name}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default GetUser;
