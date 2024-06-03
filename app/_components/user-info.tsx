"use client";

import Image from 'next/image';
import { GoogleLoginPayload } from "./google-sign-in";

interface IProps {
  userInfo: GoogleLoginPayload;
}

export function UserInfo(props: IProps) {
  const { userInfo } = props;

  return <section className="flex items-center">
    <section>
      {userInfo.name}
    </section>
    <section className="overflow-hidden" style={{ borderRadius: '50%' }}>
      <Image loader={({ src, width }) => `${src}?width={${width}}`} alt="avatar" src={userInfo.picture} width={40} height={40} />
    </section>
    
  </section>
}