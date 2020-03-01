import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
// contact me form, formspree.io
import MyForm from '../components/myform'

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
                    <section id="three">
                        <h2 id="contact">Get In Touch</h2>
                        <p>Don't hesitate to leave me a message, we'll discuss ways to work together!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <MyForm>

                                </MyForm>
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
