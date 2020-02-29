import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">                        
                        <li><a href="#" className="icon fa-github" target="_blank"><span className="label">Github</span></a></li>
                        <li><a href="mailto:masayashida@gmail.com" className="icon fa-envelope-o" target="_blank"><span className="label">Email</span></a></li>

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
