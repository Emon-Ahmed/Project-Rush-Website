import Head from "next/head";
import Banner from "../../Components/Home/Banner";
import Services from "../../Components/Home/Services";
import Departments from "../../Components/Home/Departments";
import Graph from "../../Components/Home/Graph";
import About from "../../Components/Home/About";
import Newsletter from "../../Components/Home/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rush Website</title>
        <meta name="description" content="Rush Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Rush_logo.png" />
      </Head>
      <Banner />
      <Services />
      <Departments />
      <Graph />
      <About />
      <Newsletter/>
    </>
  );
}
