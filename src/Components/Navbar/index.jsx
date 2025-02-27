import './Navbar.css'

const Navbar = () => {

    return (
        <nav className='navbar'>

            <div className="navbar-logo">
                <a href="">Samuel</a>
            </div>

            <div className="navbar-menu">
                <a href="">Projects</a>
                <a href="">Skills</a>
                {/* <a href="#about-section">About</a> */}
                {/* <a href="#leave-message-section">Leave a Message!</a> */}
            </div>

        </nav>
    )
}

export default Navbar