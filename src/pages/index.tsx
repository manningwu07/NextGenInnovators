import Head from "next/head";
import NonProfitWebsite from "./non-profit-website";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextGen Innovators</title>
        <meta name="description" content="description example" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <NonProfitWebsite/>
      </main>
    </>
  );
}
