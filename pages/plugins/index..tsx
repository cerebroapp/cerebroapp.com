import Head from "next/head";
import GithubCorner from "react-github-corner";
import DownloadsSection from "../../components/DownloadsSection";
import FooterSection from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import HighlightSection from "../../components/HighlightSection";
import NavBar from "../../components/NavBar";
import getLinks, { Links } from "../../services/getReleasesLinks";

const Plugins = ({ links }: { links: Links }) => {
  return (
    <>
      <Head>
        <title>
          Cerebro App | Plugins
        </title>
      </Head>
      <GithubCorner href="https://github.com/cerebroapp/cerebro" />
      <header className="max-w-5xl my-0 mx-auto">
        <NavBar />
      </header>
      <main className="py-0 px-5 m-auto max-w-5xl my-0 mx-auto space-y-20">
        <HeroSection />
        <DownloadsSection links={links} />
        <HighlightSection />
      </main>
      <FooterSection />
    </>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const HALF_HOUR_IN_SECONDS = 60 * 30;
  const links = await getLinks();

  return {
    props: {
      links,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 minutes
    revalidate: HALF_HOUR_IN_SECONDS,
  };
}

export default Plugins;
