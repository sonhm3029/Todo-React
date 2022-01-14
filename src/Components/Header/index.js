// import headerImg from ''
import {
    useState,
    useEffect,
    useContext
} from 'react';

import {themeContext} from '../Context';

function Header() {

    const toggleTheme = useContext(themeContext);
    const imgDesktop = toggleTheme?'img/bg-desktop-dark.jpg':'img/bg-desktop-light.jpg';
    const imgMobile = toggleTheme?'img/bg-mobile-dark.jpg':'img/bg-mobile-light.jpg';

    const [changeImg, setChangeImg] = useState(false);

    
    useEffect(()=> {
        const handleResize = ()=> {
            setChangeImg(window.innerWidth <=375);
        }
        window.addEventListener('resize', handleResize);

        return ()=> {
            window.removeEventListener('resize',handleResize);
        }
    })
    
    return (
        <div id="background-header">
            <img src={changeImg?imgMobile:imgDesktop} alt="" />
        </div>
    )
}

export default Header;
