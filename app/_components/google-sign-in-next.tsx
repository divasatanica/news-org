import { signIn } from "../auth";
import { Button } from "@/components/ui/button";

export function GoogleSignIn() {
  return <form action={async () => {
    'use server';
    await signIn('google', { fetch });
  }}>
    <Button>
      Sign In with Google
    </Button>
  </form>
}
