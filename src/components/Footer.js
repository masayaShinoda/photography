import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">                        
                        <li><a href="https://github.com/masayaShinoda/photography" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">Github</span></a></li>
                        <li><a href="https://instagram.com/masaya_shinoda" className="icon fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label">Github</span></a></li>
                        <li><a href="mailto:masayashida@gmail.com" className="icon fa-envelope-o" target="_blank" rel="noopener noreferrer"><span className="label">Email</span></a></li>

                    </ul>
                    <ul className="copyright">
                        <li>&copy; Masaya Shida 2020</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
