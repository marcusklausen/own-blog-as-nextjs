import Image from "next/image"

export default function Hero() {
    return(
        <div class="hero" id="hero">
        <div class="hero-grid">
            <div class="content" id="hero-content">
                <h1 class="transition-1">Marcusjk<br /> Nextjs portfolio</h1>
                <h2 class="transition-2">Lorem ipsum dolor sit amet consectetur.</h2>
                <div class="buttons transition-3">
                    <a href="mailto:hello@marcusklausen.dk" class="button cta">
                    <img src="/assets/mail-icon.svg" />Send mig en mail</a>
                    <a href="https://marcusklausen.dk/files/Marcus-CV-2021.pdf" class="button"><img src="/assets/file-icon.svg" />Hent CV</a>
                </div>

                
                <svg class="arrow-down-outer" fill="#FFF" xmlns="http://www.w3.org/2000/svg" width="22.507" height="28.026" viewBox="0 0 22.507 28.026">
                    <defs>
                    </defs>
                    <path  id="Icon_awesome-angle-double-down" fill="#FFF" data-name="Icon awesome-angle-double-down" class="cls-57 scroll-down" d="M10.055,18.021.492,8.459a1.681,1.681,0,0,1,0-2.384L2.081,4.486a1.681,1.681,0,0,1,2.384,0l6.778,6.778,6.778-6.778a1.681,1.681,0,0,1,2.384,0l1.6,1.582a1.681,1.681,0,0,1,0,2.384l-9.562,9.563A1.683,1.683,0,0,1,10.055,18.021Zm2.391,13.5,9.563-9.562a1.681,1.681,0,0,0,0-2.384l-1.589-1.589a1.681,1.681,0,0,0-2.384,0L11.25,24.757,4.472,17.979a1.681,1.681,0,0,0-2.384,0l-1.6,1.589a1.681,1.681,0,0,0,0,2.384l9.563,9.563A1.683,1.683,0,0,0,12.445,31.521Z" transform="translate(0.003 -3.99)"/>
                  </svg>
                  
            </div>



  

            <div class="hero-right">

                
            <svg xmlns="http://www.w3.org/2000/svg" width="270" class="hero-graphic" height="503" viewBox="0 0 270 503">

                <defs>
                    <style>
                      
                    </style>

                    <style jsx>
                        {`
                      
                        `}
                      </style>
                    <linearGradient id="linear-gradient" x1="0.488" y1="0.084" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#4c987b"/>
                      <stop offset="1" stop-color="#3f8168"/>
                    </linearGradient>
                  </defs>
                  <g id="Group_21" data-name="Group 21" transform="translate(-1231 -308.906)">
                    <g id="Group_3" data-name="Group 3" transform="translate(19 -68.965)">
                      <g id="Group_2" data-name="Group 2" transform="translate(1213 727.525)">
                        <path id="Polygon_1"  style={{ fill: 'url(#linear-gradient)'}}  data-name="Polygon 1" class="cls-1 triangle-5" d="M57.228,0l57.228,98.428H0Z" transform="translate(244.966 68.971) rotate(150)"/>
                        <path id="Path_12" style={{ fill: 'url(#linear-gradient)'}}  data-name="Path 12" class="cls-1 triangle-6" d="M56.045,0l56.045,96.63H0Z" transform="translate(96.63 41.51) rotate(90)"/>
                      </g>
                    </g>
                    <g id="Group_20" data-name="Group 20" transform="translate(1232 217.9)">
                      <path id="Polygon_1-2" data-name="Polygon 1"style={{ fill: 'url(#linear-gradient)'}}  class="cls-1 triangle-1" d="M54.228,0l54.228,93.428H0Z" transform="translate(224.448 218.259) rotate(-158)"/>
                      <path id="Polygon_2" data-name="Polygon 2"style={{ fill: 'url(#linear-gradient)'}}  class="cls-1 triangle-2" d="M70.228,0l70.228,121.428H0Z" transform="translate(78.344 209.812) rotate(30)"/>
                      <path id="Polygon_3" data-name="Polygon 3"style={{ fill: 'url(#linear-gradient)'}}  class="cls-1 triangle-3" d="M77.228,0l77.228,132.428H0Z" transform="translate(131.428 121.144) rotate(90)"/>
                      <path id="Polygon_4" data-name="Polygon 4"style={{ fill: 'url(#linear-gradient)'}}  class="cls-1 triangle-4" d="M42.728,0,85.457,74.428H0Z" transform="matrix(0.454, 0.891, -0.891, 0.454, 231.579, 246.891)"/>
                    </g>
                  </g>
                </svg>
            </div>

        </div>
    </div>
    )
}