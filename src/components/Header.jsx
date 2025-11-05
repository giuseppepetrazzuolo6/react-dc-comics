import Logo from './Logo'

export default function Header() {

    return (
        <header>
            <div className="container d-flex justify-content-between py-3">
                <Logo />
                <nav className="navbar navbar-expand navbar-light">
                    <div className="nav navbar-nav">
                        <a className="nav-item nav-link" href="#">Characters</a>
                        <a className="nav-item nav-link text-primary border-bottom border-4 border-primary" href="#">Comics</a>
                        <a className="nav-item nav-link" href="#">Movie</a>
                        <a className="nav-item nav-link" href="#">TV</a>
                        <a className="nav-item nav-link" href="#">Games</a>
                        <a className="nav-item nav-link" href="#">Collectibles</a>
                        <a className="nav-item nav-link" href="#">Videos</a>
                        <a className="nav-item nav-link" href="#">Fans</a>
                        <a className="nav-item nav-link" href="#">News</a>
                        <a className="nav-item nav-link" href="#">Shop</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}