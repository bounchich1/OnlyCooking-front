import "./footer.scss"
import footerLogo from "../../assets/icons/footerLogo.svg"
export default function Footer() {
    return (
        <div className="footer">

            <div className="footer-container">

                <div className="footer__logo-container">
                    <div className="footer__logo-container-start">
                        <img src={footerLogo} alt="footer-logo" />
                        <div className="footer-sub-text">Join OnlyCooking now and embark
                            on a culinary journey to explore, create, and savor amazing recipes!</div>
                    </div>
                    <div className="footer__logo-container-end">
                        <div className="footer-small-text">Copyright © 2025 OnlyCooking. All rights reserved.</div>
                    </div>
                </div>

                <div className="footer__links-container">
                    <div className="footer__column-container">
                        <div className="footer-bold-text">Company</div>
                        <div className="footer-sub-text footer-link">Home</div>
                        <div className="footer-sub-text footer-link">About us</div>
                        <div className="footer-sub-text footer-link">Recipes</div>
                        <div className="footer-sub-text footer-link">Recipes Form</div>
                    </div>
                    <div className="footer__column-container">
                        <div className="footer-bold-text">Recipes</div>
                        <div className="footer-sub-text footer-link">Apperizers</div>
                        <div className="footer-sub-text footer-link">Main Courses</div>
                        <div className="footer-sub-text footer-link">Deserts & Sweets</div>
                        <div className="footer-sub-text footer-link">International Flavours</div>
                    </div>
                    <div className="footer__column-container">
                        <div className="footer-bold-text footer-link">Contact</div>
                        <div className="footer-sub-text footer-link">Email</div>
                        <div className="footer-sub-text footer-link">Telegram</div>
                        <div className="footer-sub-text footer-link">VK</div>
                        <div className="footer-sub-text footer-link">Instagram</div>
                    </div>
                </div>
            </div>


        </div>
    )
}