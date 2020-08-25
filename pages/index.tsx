import React from "react";

function Index() {
  return null;
}

export async function getStaticProps() {
  return {
    props: {
      data: {
        theTwoNavyGuysReaderGroup: await (
          await fetch(
            "https://www.master-7rqtwti-hmyhm4xzoek6k.us-2.platformsh.site/the-twonavy-guys-reader-group-card"
          )
        ).json(),
        theSpeculativeReadersGroup: await (
          await fetch(
            "https://www.master-7rqtwti-hmyhm4xzoek6k.us-2.platformsh.site/the-speculative-readers-group-card"
          )
        ).json(),
        mainText: await (
          await fetch(
            "https://www.master-7rqtwti-hmyhm4xzoek6k.us-2.platformsh.site/landing-page-main-text"
          )
        ).json(),
      },
    },
    revalidate: 15,
  };
}

export default Index;
