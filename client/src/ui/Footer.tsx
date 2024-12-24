import { Link } from "react-router-dom";
import FooterStyle from "../styles/FooterStyle";
import Input from "./Input";
import Container from "./Container";

function Footer() {
    return (
        <FooterStyle>
            <div className="footer__wrraper">
                <Container>
                    <div className="footer--top">
                        <div className="footer__info">
                            <h6 className="footer__info-heading">Links</h6>
                            <ul className="footer__info-list">
                                <li className="footer__info-item">
                                    <Link className="footer__info-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer__info-item">
                                    <Link
                                        className="footer__info-link"
                                        to="marketplace"
                                    >
                                        Marketplace
                                    </Link>
                                </li>
                                <li className="footer__info-item">
                                    <Link
                                        className="footer__info-link"
                                        to="gallery"
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li className="footer__info-item">
                                    <Link
                                        className="footer__info-link"
                                        to="blog"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="footer__info-item">
                                    <Link
                                        className="footer__info-link"
                                        to="contact"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__info">
                            <h6 className="footer__info-heading">Company</h6>
                            <ul className="footer__info-list">
                                <li className="footer__info-item">About us</li>
                                <li className="footer__info-item">Careers</li>
                                <li className="footer__info-item">
                                    Businsess Inquiries
                                </li>
                            </ul>
                        </div>
                        <div className="footer__info">
                            <h6 className="footer__info-heading">Legal</h6>
                            <ul className="footer__info-list">
                                <li className="footer__info-item">
                                    Terms of service
                                </li>
                                <li className="footer__info-item">
                                    Privacy policy
                                </li>
                            </ul>
                        </div>
                        <div className="footer__info">
                            <h6 className="footer__info-heading">Contact</h6>
                            <ul className="footer__info-list">
                                <li className="footer__info-item">
                                    support@carzone.dz
                                </li>
                                <li className="footer__info-item">
                                    +213 21 00 00 00
                                </li>
                            </ul>
                        </div>
                        <div className="footer__info">
                            <h6 className="footer__info-heading">
                                Social Media
                            </h6>
                            <ul className="footer__info-list">
                                <li className="footer__info-item">Facebook</li>
                                <li className="footer__info-item">TikTok</li>
                                <li className="footer__info-item">Instagram</li>
                            </ul>
                        </div>
                        <div className="footer__info">
                            <h6 className="footer__info-heading">
                                News Letter
                            </h6>
                            <Input
                                type="email"
                                placeholder="Email..."
                                $variation="normal"
                                // $textColor="#fff"
                                // style={{borderColor: ""}}
                                // $bgColor="#fff"
                            />
                        </div>
                    </div>
                </Container>
                <div className="footer--bottom">
                    <p className="footer__logo">carZone</p>
                    <hr className="footer__separator" />
                    <Container>
                        <div className="footer__copy-right-container">
                            <p className="footer__copy-right--1">
                                &copy; carZone, 2024
                            </p>

                            <ul className="footer__social-media">
                                <li className="footer__social-media-item">
                                    <Link to="/">
                                        <i className="ri-facebook-fill"></i>
                                    </Link>
                                </li>
                                <li className="footer__social-media-item">
                                    <Link to="/">
                                        <i className="ri-tiktok-fill"></i>
                                    </Link>
                                </li>
                                <li className="footer__social-media-item">
                                    <Link to="/">
                                        <i className="ri-instagram-fill"></i>
                                    </Link>
                                </li>
                            </ul>

                            <p className="footer__copy-right--2">
                                All rights reserved.
                            </p>
                        </div>
                    </Container>
                </div>
            </div>
        </FooterStyle>
    );
}

export default Footer;
