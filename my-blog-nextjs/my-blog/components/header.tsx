import { useState } from 'react'





export default function Header({width}: {width: boolean}) {


    componentDidMount() {
        
    }

    return (

        
        <header>
        {width ? (<div className="hero-grid">) : ('') }
            <div className="header left" id="header">
                <a href="https://www.marcusklausen.dk"><span id="logo">Marcus Klausen</span></a>
                <nav id="nav">
                    <ul>
                        <li><a href="#">Forside</a></li>
                        <li><a href="#transition-portfolio">Portfolio</a></li>
                        <li><a href="https://github.com/marcusklausen" target="_blank">Github</a></li>
                    </ul>
                </nav>
            </div>
            {width ? (</div>) : ('') }
        </header>
    )
}