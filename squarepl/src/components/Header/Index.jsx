import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
  return(
    <header id="header">
      <nav className="navbar navbar-default">
        <div className="container container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
              data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link to="/" className='navbar-brand'>Square</Link>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Our Services</Link></li>
              <li><Link to="/">Technologies</Link></li>
              <li><Link to="/company">Company</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" 
              role="button" aria-haspopup="true" aria-expanded="false">
                <i class="fa-solid fa-globe" style={{ marginRight: 10 }}></i>
                English <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/service2">
                    <img
                      src='assets/flags/poland.png'
                      alt='Square | Poland'
                      width={20}
                      height={20}
                      style={{ marginRight: 8 }}
                    />
                    Poland
                  </Link>
                </li>
                <li>
                  <Link to="/service1">
                    <img
                      src='assets/flags/brazil.png'
                      alt='Square | Portuguese'
                      width={20} height={20}
                      style={{ marginRight: 8 }}
                    />
                    Português
                  </Link>
                </li>
                <li>
                  <Link to="/service3">
                    <img
                      src='assets/flags/united-states.png'
                      alt='Square | English'
                      width={20} height={20}
                      style={{ marginRight: 8 }}
                    />
                    Inglês
                  </Link>
                </li>
              </ul> 
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;