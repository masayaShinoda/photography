import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Navbar from '../components/navbar'


// portrait imports
import thumbp01 from '../assets/images/thumbs/p01.jpg'
import thumbp02 from '../assets/images/thumbs/p02.jpg'
import thumbp03 from '../assets/images/thumbs/p03.jpg'
import thumbp04 from '../assets/images/thumbs/p04.jpg'
import thumbp05 from '../assets/images/thumbs/p05.jpg'
import thumbp06 from '../assets/images/thumbs/p06.jpg'

import fullp01 from '../assets/images/fulls/p01.jpg'
import fullp02 from '../assets/images/fulls/p02.jpg'
import fullp03 from '../assets/images/fulls/p03.jpg'
import fullp04 from '../assets/images/fulls/p04.jpg'
import fullp05 from '../assets/images/fulls/p05.jpg'
import fullp06 from '../assets/images/fulls/p06.jpg'

// contact me form, formspree.io
import MyForm from '../components/myform'

const PORTRAIT_IMAGES = [
    { id: 'p1', source: fullp01, thumbnail: thumbp01, caption: '', description: ''},
    { id: 'p2', source: fullp02, thumbnail: thumbp02, caption: '', description: ''},
    { id: 'p3', source: fullp03, thumbnail: thumbp03, caption: '', description: ''},
    { id: 'p4', source: fullp04, thumbnail: thumbp04, caption: '', description: ''},
    { id: 'p5', source: fullp05, thumbnail: thumbp05, caption: '', description: ''},
    { id: 'p6', source: fullp06, thumbnail: thumbp06, caption: '', description: ''},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Masaya Photography"
        const siteDescription = "A little photo album."

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <Navbar></Navbar>
                    <h2 id="portraits">Portraits</h2>
                    <p>Beautiful people I've been fortunate enough to point my camera at.</p>
                    <section id="two">


                        <Gallery images={PORTRAIT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="three">
                        <h2 id="contact">Get In Touch</h2>
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
                                        <a href="mailto:masayashida@gmail.com" target="_blank" rel="noopener noreferrer">masayashida@gmail.com</a>
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
