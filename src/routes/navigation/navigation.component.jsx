import { Fragment,useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../Assets/crown.svg';

import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

  const{currentuser}=useContext(UserContext);


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/auth'>
          {currentuser?<span onClick={signOutUser} style={{cursor:'pointer'}}>SIGN OUT</span>:<span style={{cursor:'pointer'}}>SIGN IN</span>}
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;