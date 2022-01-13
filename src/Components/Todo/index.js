import TodoTitle from "../TodoTitle";
import TodoBox from "../TodoBox";
import TodoBody from "../TodoBody";
import TodoFooter from "../TodoFooter";

function Todo() {
    return (
        <div id='todo-app__overlay'>
          <TodoBox>
            <TodoTitle />
            <TodoBody/>
            <TodoFooter />
          </TodoBox>
        </div>
    )
}

export default Todo;
