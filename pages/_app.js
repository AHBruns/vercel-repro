import React from "react";
import { useRouter } from "next/router";

function App() {
  const router = useRouter();
  console.log(`[${router.asPath}]`);
  return (
    <div>
      {router.asPath !== "/" && <div className="NO_SHOW" />}
      <div className="SHOW" />
    </div>
  );
}

export default App;
