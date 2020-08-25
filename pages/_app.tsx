import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      {router.asPath !== "/" && <div className="NO_SHOW" />}
      <div className="SHOW" />
    </div>
  );
}

export default App;
