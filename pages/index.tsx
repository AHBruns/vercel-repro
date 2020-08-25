import React from "react";

function Index() {
  return null;
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 15,
  };
}

export default Index;
