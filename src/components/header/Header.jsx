import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './Header.scss'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import CartCtx from '../../utils/contextFiles/cart.context';
import UserCtx from '../../utils/contextFiles/user.context';

const Header = () => {
    const [{ hidden }] = useContext(CartCtx);
    const { currentUser } = useContext(UserCtx);
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop' >
                    SHOP
                </Link>
                <Link className='option' to='/about' >
                    ABOUT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            { !hidden && <CartDropdown /> }
        </div>
    );
} 

export default Header;