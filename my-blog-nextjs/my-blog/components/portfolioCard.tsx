import Link from 'next/link'

export default function portfolioCard({id, date, title, img, caption}) {
    return (

        <section class="portfolio">

<div class="portfolio-container">
    <div class="inner transition2">
        <span>{date}</span>
        <a href={id} class="open-work-item">
            <h3>{title}</h3>
        </a>
        <p>{caption}</p>
    </div>
</div>

<Link href={'posts/' + id}>

<a className="open-work-item">
    <img src={'img/' + img} alt="" srcSet="" />
</a>
</Link>

</section>
    )
}