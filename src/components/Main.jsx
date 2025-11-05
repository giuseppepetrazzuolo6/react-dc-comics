import digital from '../assets/img/buy-comics-digital-comics.png'
import merch from '../assets/img/buy-comics-merchandise.png'
import sub from '../assets/img/buy-comics-subscriptions.png'
import shop from '../assets/img/buy-comics-shop-locator.png'
import visa from '../assets/img/buy-dc-power-visa.svg'

export default function Main() {

    return (
        <main>
            <section className='main-top bg-dark'>
                <div className="container d-flex align-items-center">
                    <h3 className='text-white'>--&gt; Content goes here &lt;--</h3>
                </div>
            </section>
            <section className="main-bottom bg-primary">
                <div className="container d-flex align-items-center justify-content-around">
                    <div className="d-flex align-items-center">
                        <img src={digital} alt="Digital Comics" />
                        <span className="text-uppercase text-white">Digital Comics</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={merch} alt="DC Merchandise" />
                        <span className="text-uppercase text-white">DC Merchandise</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={sub} alt="Subscription" />
                        <span className="text-uppercase text-white">Subscription</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={shop} alt="Comic Shop Locator" />
                        <span className="text-uppercase text-white">Comic Shop Locator</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={visa} alt="DC Power Visa" />
                        <span className="text-uppercase text-white">DC Power Visa</span>
                    </div>
                </div>
            </section>
        </main>
    )
}