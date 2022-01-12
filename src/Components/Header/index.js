// import headerImg from ''
import {useState, useEffect} from 'react';

function Header() {
    const imgDesktop = 'img/bg-desktop-light.jpg';
    const imgMobile = 'img/bg-mobile-light.jpg';

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
