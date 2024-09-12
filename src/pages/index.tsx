import Head from "next/head";
import NonProfitWebsite from "./non-profit-website";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starter Pack</title>
        <meta name="description" content="description example" />
        <link rel="icon" href="" /> {/* TODO: Add logo.jpg */}
      </Head>
      <main>
        <NonProfitWebsite/>
      </main>
    </>
  );
}
