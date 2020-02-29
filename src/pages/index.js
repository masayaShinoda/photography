import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'

import thumbp01 from '../assets/images/thumbs/p01.jpg'
import thumbp02 from '../assets/images/thumbs/p02.jpg'

import fullp01 from '../assets/images/fulls/p01.jpg'
import fullp02 from '../assets/images/fulls/p02.jpg'




import MyForm from '../components/myform'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Peace', description: 'Kamakura Big Buddha, Yokohama, Japan.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Harmony', description: 'Kamakura Big Buddha, Yokohama, Japan.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Tranquility', description: 'Kompot, Cambodia.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Heroic', description: 'Kep, Cambodia.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Seas', description: 'Kep, Cambodia.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Gates', description: 'Angkor Thom, Siem Reap, Cambodia.'},
    { id: '7', source: full07, thumbnail: thumb07, caption: 'Magnificent', description: 'Angkor Wat, Siem Reap, Cambodia.'}
];

const PORTRAIT_IMAGES = [
    { id: 'p1', source: fullp01, thumbnail: thumbp01, caption: '', description: ''},
    { id: 'p2', source: fullp02, thumbnail: thumbp02, caption: '', description: ''},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Masaya Photography"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Photographer based in Phnom Penh, Cambodia.</h2>
                        </header>
                        <p>Welcome to my site! Below you can find some of my works.
                            <br></br>
                            Capturing photos of beautiful people and beautiful scenery have always brought me joy.
                            <br></br>
                            Below, in no particular photo, are some of my favorite shots. Hope you like them!
                        </p>
                        <ul className="actions">
                            {/*<li><a href="#" className="button">Learn More</a></li>*/}
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Landscapes</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        {/*<ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>*/}

                        {/* masaya code, portrait shots */}
                        <br></br>
                        <h2>Portraits</h2>

                        <Gallery images={PORTRAIT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Don't hesitate to leave me a message, we'll discuss ways to work together!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <MyForm>

                                </MyForm>
                                {/*<form method="post" action="https://formspree.io/xdozzkeq">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>*/}
                                {/*<ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>*/}

                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Phnom Penh<br />
                                        Cambodia<br />
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +855 96 780 2296
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:masayashida@gmail.com" target="_blank">masayashida@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex