import { createClient } from "@/utils/supabase/server";

const GetUser = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  //   useEffect(() => {
  //     async function getUser() {
  //       const supabase = createClient();
  //       const { data, error } = await supabase.auth.getUser();
  //       if (error || !data.user) {
  //         console.log("User not found");
  //       } else {
  //         setUser(data.user);
  //       }
  //     }
  //     getUser();
  //   }, []);
  return <div>{data?.user?.user_metadata.full_name}</div>;
};

export default GetUser;
