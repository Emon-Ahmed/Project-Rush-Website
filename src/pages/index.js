import Head from "next/head";
import Banner from "../../Components/Home/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rush Website</title>
        <meta name="description" content="Rush Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Rush_logo.png" />
      </Head>
      <div className="banner-bg">
        <Banner />
      </div>
    </>
  );
}
