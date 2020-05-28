import React from 'react';

const Footer = () => {
    return (
        <footer class="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <h5>About Us</h5>
                        <p>We are an examination website which specializes in easy creation of test for teachers and provide students with a user friendly environment to take tests.</p>
                    </div>
                    <div className="col s12 l4 offset-l2">
                        <h5>Connect</h5>
                        <ul>
                            <li><a href="#" className="grey-text text-lighten-3">Facebook</a></li>
                            <li><a href="#" className="grey-text text-lighten-3">Instagram</a></li>
                            <li><a href="#" className="grey-text text-lighten-3">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright grey darken-4">
                <div className="container center-align">
                    © 2014-2020 Exam-help, All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;