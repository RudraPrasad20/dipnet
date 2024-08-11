
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { InitialProfile } from "@/lib/initial-profile";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  // const userProfile = await InitialProfile();
  
  // const server = await db.server.findFirst({
  //   where: {
  //     members: {
  //       some: {
  //         profileId: userProfile.id
  //       }
  //     }
  //   }
  // })

  // if (server) { 
  //   return redirect(`/servers/${server.id}`); 
  // }

  return (
    <div>
      <Button >hey there , welcome to dipnet</Button>

  

    </div>
  );
}
