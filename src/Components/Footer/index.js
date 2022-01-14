import {useContext} from 'react';
import {themeContext} from '../Context'

function Footer() {

    const toggleTheme = useContext(themeContext);

    return (
        <footer id="page-footer" className={toggleTheme?"app-theme__dark":"app-theme__light"}>

        </footer>
    )
}

export default Footer;
