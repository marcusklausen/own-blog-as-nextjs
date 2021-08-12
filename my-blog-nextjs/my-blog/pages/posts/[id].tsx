import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Header from '../../components/header'
import Link from 'next/link'



export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}
  


  export default function Post({ postData }) {
    return (
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>

        <Header width={false}/>
        <section className="portfolio">
        <article className="inner">
          <h1>{postData.title}</h1>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>

          </article>

        <img src={'../img/' + postData.img} />

          </section>
        </>
    )
  }