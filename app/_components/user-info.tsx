'use client';
import Image from 'next/image';
import { Session } from 'next-auth';
import { Button } from '@/components/ui/button';
import { signOut } from '../auth';

interface IProps {
  userInfo: Session;
}

export function UserInfo(props: IProps) {
  const { userInfo } = props;

  return <section className="flex items-center">
    <section>
      {userInfo.user?.name}
    </section>
    <section className="overflow-hidden" style={{ borderRadius: '50%' }}>
      <Image loader={({ src, width }) => `${src}?width={${width}}`} alt="avatar" src={userInfo.user?.image || ''} width={40} height={40} />
    </section>
    <form action={async () => {
      await signOut({ redirectTo: '/' });
    }}>
      <Button>
        Sign Out
      </Button>
    </form>
  </section>
}