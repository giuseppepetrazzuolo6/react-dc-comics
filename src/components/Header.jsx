import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {

    return (
        <header>
            <div className="container d-flex justify-content-between py-3">
                <Logo />
                <NavBar />
            </div>
        </header>
    )
}