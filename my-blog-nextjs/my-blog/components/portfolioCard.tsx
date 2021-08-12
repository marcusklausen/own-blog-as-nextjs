export default function portfolioCard() {
    return (

        <section class="portfolio">

<div class="portfolio-container">
    <div class="inner transition2">
        <span>Kategori title</span>
        <a href="#" class="open-work-item">
            <h3>Lorem ipsum dolor sit amet.</h3>
        </a>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium illo, pariatur ullam vero eaque libero nemo quod itaque quibusdam sed.</p>
    </div>
</div>


<a href="<?php echo($row['case_id']);?>" class="open-work-item">
<img src="img/portfolio-2.png" alt="" srcset="" />
</a>

</section>
    )
}