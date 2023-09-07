import Head from 'next/head'
import FooterSection from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HighlightSection from '../components/HighlightSection'
import getLinks, { Links } from '../services/getReleasesLinks'
import StatsSection from '../components/StatsSection'
import TeamSection from '../components/TeamSection'

const Home = ({ links }: { links: Links }) => {
  return (
    <>
      <Head>
        <title>Cerebro App - Open Source productivity booster with a brain</title>
      </Head>
      <main className='py-0 px-5 m-auto max-w-5xl my-0 mx-auto space-y-20'>
        <HeroSection links={links} />
        <HighlightSection />
        <StatsSection />
        <TeamSection />
      </main>
      <FooterSection />
    </>
  )
}

export async function getStaticProps() {
  const HALF_HOUR_IN_SECONDS = 60 * 30
  const links = await getLinks()

  return {
    props: {
      links,
    },
    revalidate: HALF_HOUR_IN_SECONDS,
  }
}

export default Home
