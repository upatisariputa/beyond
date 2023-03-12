import type { NextPage } from "next";
import Head from "next/head";
import Web from "./Web";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>이기훈 포트폴리오</title>
        <meta property="og:title" content="이기훈 포트폴리오" key="title" />
      </Head>
      <Web />
    </>
  );
};

export default Home;
