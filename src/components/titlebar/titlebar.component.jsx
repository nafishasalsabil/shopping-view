import './titlebar.styles.css';


const Titlebar = () =>{
    return (
        <nav className="navbar">
            <div className="left-section">
                <div className="logo">
                <img className='logoimg' src='../../../logo.png' alt='logo'></img>
                </div>
            </div>
            <div className="middle-section">
                <input type="text" placeholder="Search for products" className="search-bar" />
                <div className="dropdown1">
                   All Categories 
                    <div className="dropdown-arrow1"></div>
                </div>
                <div>
                    <button className='search-button'>
                   <img className='searchImg' src='../../../search.png' alt='logo'></img>
                    </button>
                </div>
           
            </div>
            <div className="right-section">
                <div className="item"> <img className='rightImg' src='../../../repeat-button.png' alt='logo'></img></div>
                <div className="item"> <img className='rightImg' src='../../../heart.png' alt='logo'></img></div>
                <div className="item"> <img className='rightImg' src='../../../shopping-cart.png' alt='logo'></img>
                <div className="badge">
                    0
                </div></div>
                <div className='item'>Account</div>
                <div className="item"> <img className='rightImg' src='../../../user.png' alt='logo'></img></div>
                <div className='item'>$20.00</div>
            </div>
        </nav>
    );
}

export default Titlebar;