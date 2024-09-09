import Head from "next/head";
import NavBar from "~/components/bigUI/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starter Pack</title>
        <meta name="description" content="description example" />
        <link rel="icon" href="" /> {/* TODO: Add logo.jpg */}
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#2f026db9] to-[#090913]">
        <NavBar />
      </main>
    </>
  );
}
