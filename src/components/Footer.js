import { Link } from 'react-router-dom';

import logo from '../images/logo-white.png';


function Footer() {
    return (
        <div className='bg-footer py-11 text-center text-white text-base'>
            <div>
                <img src={logo} alt="logo" className='mx-auto' />
            </div>
            <div className='flex justify-center gap-x-7 my-8'>
                <Link className='hover:underline' to="/">Оголошення</Link>
                <Link className='hover:underline' to="/aboutUs">Про нас</Link>
                <Link className='hover:underline' to="/history">Історія</Link>
                <Link className='hover:underline' to="/userProfile">Профіль</Link>
            </div>
            <div>
                {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Footer;