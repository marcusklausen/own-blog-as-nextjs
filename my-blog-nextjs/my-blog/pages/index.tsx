import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Hero from '../components/hero'
import PortfolioSection from '../components/portfolioSection'
import { getSortedPostsData } from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
}


export default function Home( { allPostsData} ) {
  return (

    <>

    <Head>
      <title>Marcus Klausen</title>
    </Head>

    <Header />
    <Hero />
    <PortfolioSection allPostsData={allPostsData} />

      <h1>Hello World</h1>
      <Link href="/posts/portfolio">
        <a>To portfolio</a>
      </Link>

    </>

  )
}
