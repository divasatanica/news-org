"use client";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { GoogleLoginPayload, GoogleSignIn } from "./google-sign-in";
import { jwtDecode } from "jwt-decode";
import { UserInfo } from "./user-info";
import { PROFILE_JWT_KEY } from "@/shared/constants";

export function TopNav() {
  const [jwt, setJwt] = useState('');
  const userInfo = useMemo(() => {
    if (!jwt) {
      return null;
    }
    const decoded = jwtDecode<GoogleLoginPayload>(jwt);
    console.log('Decoded', decoded);

    if (decoded.exp * 1000 < Date.now()) {
      return null;
    }

    return decoded;
  }, [jwt]);
  useLayoutEffect(() => {
    const jwt = localStorage.getItem(PROFILE_JWT_KEY);
    if (jwt) {
      setJwt(jwt);
    }

    const onStorage = (e: StorageEvent) => {
      const { oldValue, newValue, key } = e;

      console.log('Storage', e);

      if (key !== PROFILE_JWT_KEY) {
        return;
      }

      if (newValue == null) {
        setJwt('');
        return;
      }

      setJwt(newValue);
    };
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, []);
  return <nav className="flex items-center p-4" style={{ boxShadow: '5px 0 5px rgba(0,0,0,0.3)' }}>
    <section className="flex-1">

    </section>
    <section style={{ width: '20%' }}>

    </section>
    {userInfo ? <UserInfo userInfo={userInfo} /> : <GoogleSignIn />}
  </nav>
}