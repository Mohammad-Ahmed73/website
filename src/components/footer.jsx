import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-top py-5'>
                <div className='container-lg'>
                    <div className='row'>
                        <div class="col-lg-3 text-center text-lg-start mb-4 mb-lg-0">
                            <a href="#">
                                <img src='' alt='Footer Logo' width={200} />
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center text-sm-start">
                            <h4 className='head-h4'>Learn More</h4>
                            <ul class="list-unstyled footer-menu">
                                <li><a href="#">About Lift</a></li>
                                <li><a href="#">Press Relaases</a></li>
                                <li><a href="#">Environment</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center text-sm-start">
                            <h4 className='head-h4'>Contact Us</h4>
                            <ul class="list-unstyled contact-info-list">
                                <li>
                                    <span>
                                        landline
                                    </span>
                                    <span>
                                        <a href='tel:123-456-7890'>123-456-7890</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        office
                                    </span>
                                    <span>
                                        <a href='tel:123-456-7890'>123-456-7890</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-3 text-center text-lg-start'>
                            <h4 className='head-h4'>Social</h4>
                            <ul className='social-media-list list-unstyled justify-content-center justify-content-lg-start'>
                                <li>
                                    <a href='#'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i class="fa-brands fa-wordpress"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom py-4'>
                <div className='container-lg'>
                    <p className='copy-right-text paragraph-text-sm fw-normal text-center mb-0'>
                        © 2020 Lift Media | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
