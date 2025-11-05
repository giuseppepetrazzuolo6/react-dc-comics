import facebook from '../assets/img/footer-facebook.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'
import pinterest from '../assets/img/footer-pinterest.png'
import periscope from '../assets/img/footer-periscope.png'

export default function Footer() {

    return (
        <footer>
            <section className='footer-top'>
                <div className="container d-flex">
                    <div className="col-2 py-4">
                        <h5 className='text-white'>DC COMICS</h5>
                        <ul className="list-unstyled text-secondary">
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>movie</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                        <h5 className='text-white'>SHOP</h5>
                        <ul className="list-unstyled text-secondary">
                            <li>Shop DC</li>
                            <li>Shop DC collectibles</li>
                        </ul>
                    </div>
                    <div className="col-2 py-4">
                        <h5 className='text-white'>DC</h5>
                        <ul className="list-unstyled text-secondary">
                            <li>Terms of use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choises</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscription</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Rating</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-2 py-4">
                        <h5 className='text-white'>SITES</h5>
                        <ul className="list-unstyled text-secondary">
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                    <div className="col-6"></div>
                </div>
            </section>
            <section className="footer-bottom bg-dark">
                <div className="container d-flex align-items-center justify-content-between">
                    <div>
                        <button className='butn'><a href="">SIGN-UP NOW!</a></button>
                    </div>
                    <div className='d-flex align-items-center gx-3'>
                        <h5 className='text-primary mb-0 mx-3'>FOLLOW US</h5>
                        <img className='mx-2' src={facebook} alt="" />
                        <img className='mx-2' src={twitter} alt="" />
                        <img className='mx-2' src={youtube} alt="" />
                        <img className='mx-2' src={pinterest} alt="" />
                        <img className='mx-2' src={periscope} alt="" />
                    </div>
                </div>
            </section>
        </footer>
    )
}