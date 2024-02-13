import './navbar.styles.css';

const Navbar = () => {
    return (
        <nav>
        <div className='nav-container'>
        <div className="left-section">
                <div className="hamburger-menu"></div>
                <div className="title">Browse Categories</div>
            </div>

            <ul className="list">
                <li className="items">
                    Home
                </li>
                <li className="items dropdown">
                    Products
                    <div className="dropdown-arrow"></div>
                </li>
                <li className="items dropdown">
                    Categories
                    <div className="dropdown-arrow"></div>
                </li>
                <li className="items dropdown">
                    Pages
                    <div className="dropdown-arrow"></div>
                </li>
                <li className="items">
                    Campaign
                </li>
                <li className="items">
                    Offer
                </li>
                <li className="items">
                    Blog
                </li>
                <li className="items">
                    Review
                </li>
                <li className="items">
                    Flash Sale
                </li>
                <li className="items">
                    Contact Us
                </li>
            </ul>
        </div>

         
        
        </nav>
    );
}

export default Navbar;
