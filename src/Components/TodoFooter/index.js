import {
    useContext
} from 'react';

import {themeContext} from '../Context';


function TodoFooter() {

    const toggleTheme = useContext(themeContext);

    return (
        <div
         id="todo-app__footer" className={toggleTheme?"app-theme-footer__dark":"app-theme-footer__light"}>
            <div className="footer__item">
                All
            </div>
            <div className="footer__item">
                Active
            </div>
            <div className="footer__item">
                Completed
            </div>
        </div>
    )
}

export default TodoFooter;
