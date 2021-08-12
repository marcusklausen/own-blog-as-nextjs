import Card from '../components/portfolioCard'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Date from '../components/date'
import portfolioCard from '../components/portfolioCard'


export default function PortfolioSection({allPostsData} : {
    allPostsData: {
      date: string
      title: string
      id: string
    }[]
  })  {

    return (

        <>

        {allPostsData.map(({ id, date, title }) => (

        // <Card id={id} date={'/posts/' .id} title={} />


                    <li key={id}>
                    <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                    </Link>
                    <br />
                    <small>
                    <Date dateString={date} />
                    </small>
                </li>
                ))}
                <h1>Portfolio Section</h1>
                
            )
        </>

    )
}









