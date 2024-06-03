"use client";

import { useEffect, useLayoutEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { PROFILE_JWT_KEY } from "@/shared/constants";

export type GoogleLoginPayload = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  exp: number;
}

export function GoogleSignIn() {
  const handleCredentialResponse = (response: any) => {
    console.log("Response", response);
    const responsePayload = jwtDecode<GoogleLoginPayload>(response.credential);

     console.log("ID: " + responsePayload.sub);
     console.log('Full Name: ' + responsePayload.name);
     console.log('Given Name: ' + responsePayload.given_name);
     console.log('Family Name: ' + responsePayload.family_name);
     console.log("Image URL: " + responsePayload.picture);
     console.log("Email: " + responsePayload.email);

     localStorage.setItem(PROFILE_JWT_KEY, response.credential);
  };
  useLayoutEffect(() => {
    const _google: any = (window as any).google;
    if (!_google) {
      return;
    }
    (_google as any).accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    _google.accounts.id.renderButton(
      document.getElementById("googleSignIn"),
      { theme: "outline", size: "large",  } // customization attributes
    );
    // _google.accounts.id.prompt(); // also display the One Tap dialog
  }, []);
  return <div id="googleSignIn" />;
}
