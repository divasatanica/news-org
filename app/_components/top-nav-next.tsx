import { auth } from "../auth"
import { GoogleSignIn } from "./google-sign-in-next";
import { UserInfo } from "./user-info";

export async function TopNavNext() {
  const user = await auth();
  console.log('User', user);
  return <nav className="flex items-center p-4" style={{ boxShadow: '5px 0 5px rgba(0,0,0,0.3)' }}>
    <section className="flex-1">

    </section>
    <section style={{ width: '20%' }}>
      {user == null ? <GoogleSignIn /> : <UserInfo userInfo={user} />}
    </section>
  </nav>
}