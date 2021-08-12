import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Hero from '../components/hero'
import PortfolioSection from '../components/portfolioSection'


export default function Home() {
  return (

    <>

    <Head>
      <title>Marcus Klausen</title>
    </Head>

    <Header />
    <Hero />
    <PortfolioSection />

      <h1>Hello World</h1>
      <Link href="/posts/portfolio">
        <a>To portfolio</a>
      </Link>

    </>

  )
}
