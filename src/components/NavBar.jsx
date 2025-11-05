const menu = [
    {
        id: 1,
        link: '#',
        text: 'Characters',
        is_active: false
    },
    {
        id: 2,
        link: '#',
        text: 'Comics',
        is_active: true
    },
    {
        id: 3,
        link: '#',
        text: 'Movie',
        is_active: false
    },
    {
        id: 4,
        link: '#',
        text: 'TV',
        is_active: false
    },
    {
        id: 5,
        link: '#',
        text: 'Games',
        is_active: false
    },
    {
        id: 6,
        link: '#',
        text: 'Collectibles',
        is_active: false
    },
    {
        id: 7,
        link: '#',
        text: 'Videos',
        is_active: false
    },
    {
        id: 8,
        link: '#',
        text: 'Fans',
        is_active: false
    },
    {
        id: 9,
        link: '#',
        text: 'News',
        is_active: false
    },
    {
        id: 10,
        link: '#',
        text: 'Shop',
        is_active: false
    },
]


export default function NavBar() {

    return (

        <nav className="navbar navbar-expand">
            <div className="nav navbar-nav">
                {
                    menu.map(item => (
                        <a key={item.id} className={`nav-item nav-link ${item.is_active ? 'text-primary border-bottom border-4 border-primary' : ''}`} href={item.link}>{item.text}</a>
                    ))
                }
            </div>
        </nav>
    )
}