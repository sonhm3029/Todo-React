import {
  useContext
}
from 'react';

import TodoTitle from "../TodoTitle";
import TodoBox from "../TodoBox";
import TodoBody from "../TodoBody";
import TodoFooter from '../TodoFooter';
import {themeContext} from '../Context';


function Todo() {

  const toggleTheme = useContext(themeContext);

  return (
      <div id='todo-app__overlay' className={toggleTheme?"app-theme__dark":"app-theme__light"}>
        <TodoBox>
          <TodoTitle />
          <TodoBody />
          <TodoFooter />
        </TodoBox>
      </div>
  )
}

export default Todo;
