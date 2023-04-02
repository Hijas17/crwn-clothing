import { Outlet ,link, Link } from "react-router-dom";
import { Fragment } from "react";
import '../navbar/navbar.styles.scss'

import { ReactComponent as CrwnLogo } from '../../Assets/crown.svg';


const Navbar= () => {
    return(
      <Fragment>
        <div className="navbar">
            <Link className="logo-container" to='/'>
            <CrwnLogo className='logo'></CrwnLogo>
            </Link>
            <div className="link-container">
                <Link className="navbar-link" to='/shop'>SHOP</Link>
                <Link className="navbar-link" to='/signin'>SIGN-IN</Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navbar;
