import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Navbar from '../components/navbar'

import { Link } from 'gatsby'

//landscape imports
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'

// portrait imports
import thumbp01 from '../assets/images/thumbs/p01.jpg'
import thumbp02 from '../assets/images/thumbs/p02.jpg'
import thumbp03 from '../assets/images/thumbs/p03.jpg'
import thumbp04 from '../assets/images/thumbs/p04.jpg'
import thumbp05 from '../assets/images/thumbs/p05.jpg'
import thumbp06 from '../assets/images/fulls/p06.jpg'
import thumbp07 from '../assets/images/fulls/p07.jpg'
import thumbp08 from '../assets/images/fulls/p08.jpg'
import thumbp09 from '../assets/images/fulls/p09.jpg'
import thumbp10 from '../assets/images/fulls/p10.jpg'
import thumbp11 from '../assets/images/fulls/p11.jpg'

import fullp01 from '../assets/images/fulls/p01.jpg'
import fullp02 from '../assets/images/fulls/p02.jpg'
import fullp03 from '../assets/images/fulls/p03.jpg'
import fullp04 from '../assets/images/fulls/p04.jpg'
import fullp05 from '../assets/images/fulls/p05.jpg'
import fullp06 from '../assets/images/fulls/p06.jpg'
import fullp07 from '../assets/images/fulls/p07.jpg'
import fullp08 from '../assets/images/fulls/p08.jpg'
import fullp09 from '../assets/images/fulls/p09.jpg'
import fullp10 from '../assets/images/fulls/p10.jpg'
import fullp11 from '../assets/images/fulls/p11.jpg'

// contac me form, formspree.io
import MyForm from '../components/myform'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Peace',
    description: 'Kamakura Big Buddha, Yokohama, Japan.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Harmony',
    description: 'Kamakura Big Buddha, Yokohama, Japan.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Tranquility',
    description: 'Kompot, Cambodia.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Heroic',
    description: 'Kep, Cambodia.',
  },
]

const PORTRAIT_IMAGES = [
  {
    id: 'p9',
    source: fullp09,
    thumbnail: thumbp09,
    caption: '',
    description: '',
  },
  {
    id: 'p1',
    source: fullp01,
    thumbnail: thumbp01,
    caption: '',
    description: '',
  },
  {
    id: 'p3',
    source: fullp03,
    thumbnail: thumbp03,
    caption: '',
    description: '',
  },
  {
    id: 'p5',
    source: fullp05,
    thumbnail: thumbp05,
    caption: '',
    description: '',
  },
  {
    id: 'p11',
    source: fullp11,
    thumbnail: thumbp11,
    caption: '',
    description: '',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Masaya Photography'
    const siteDescription = 'A little photo album.'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <meta name="theme-color" content="#4C88B3"></meta>
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Photographer based in Phnom Penh, Cambodia.</h2>
              <Navbar></Navbar>
            </header>
            <p>
              Welcome to my site! Below you can find some of my works.
              <br></br>
              Capturing photos of beautiful <Link to="/portraits">
                people
              </Link>{' '}
              and beautiful <Link to="/landscapes">scenery</Link> have always
              brought me joy.
              <br></br>
              Below, in no particular order, are some of my favorite shots. Hope
              you like them!
            </p>
            <ul className="actions">
              {/*<li><a href="#" className="button">Learn More</a></li>*/}
            </ul>
          </section>

          <section id="two">
            <h2 id="landscapes">Landscapes</h2>
            <p>(Click to enlarge)</p>
            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <Link to="/landscapes" className="button">
                  See More
                </Link>
              </li>
            </ul>

            {/* masaya code, portrait shots */}
            <br></br>
            <h2 id="portraits">Portraits</h2>
            <p>(Click to enlarge)</p>
            <Gallery
              images={PORTRAIT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <Link to="/portraits" className="button">
                  See More
                </Link>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2 id="contact">Get In Touch</h2>
            <p>
              Don't hesitate to leave me a message, we'll discuss ways to work
              together!
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <MyForm></MyForm>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Phnom Penh
                    <br />
                    Cambodia
                    <br />
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    +855 96 780 2296
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a
                      href="mailto:masayashida@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      masayashida@gmail.com
                    </a>
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
