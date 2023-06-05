import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../Assets/crown.svg';

import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

  const{currentuser,setcurrentuser}=useContext(UserContext);
  const signouthandler= async()=>{
    const res = await signOutUser();
    setcurrentuser(null);

  }
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
          {currentuser?<span onClick={signouthandler} style={{cursor:'pointer'}}>SIGN OUT</span>:<span style={{cursor:'pointer'}}>SIGN IN</span>}
          {/* <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link> */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;