import { useRef } from "react";

function NavBar() {
    const menuRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        if (menuRef.current && iconRef.current) {
            menuRef.current.classList.toggle("open");
            iconRef.current.classList.toggle("open");
        }
    };

    return (
        <header>
            <nav id="desktop-nav">
                <div className="logo">Kick It</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <nav id="hamburger-nav">
                <div className="logo">Kick It</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#products" onClick={toggleMenu}>Products</a></li>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default NavBar