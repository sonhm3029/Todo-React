import TodoTitle from "../TodoTitle";
import TodoSpinner from "../TodoSpinner";
import TodoBox from "../TodoBox";
import TodoBody from "../TodoBody";

function Todo() {
    return (
        <div id='todo-app__overlay'>
          <TodoBox>
            <TodoTitle />
            <TodoBody/>
          </TodoBox>
        </div>
    )
}

export default Todo;
