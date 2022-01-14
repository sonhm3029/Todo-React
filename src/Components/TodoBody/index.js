import {
    useState,
    useRef,
    useContext
} from 'react';
import TodoEmpty from '../TodoEmpty';
import TodoCheckBox from '../TodoCheckBox';
import {themeContext} from '../Context';


function TodoBody() {

    const toggleTheme = useContext(themeContext);
    const [work, setWork] = useState("");
    const [todoList, setTodoList] = useState(()=> {
        return JSON.parse(localStorage.getItem('todo')) ?? [];
    });
    const [toggleBtn, setToggleBtn] = useState(false);
    const [editItem, setEditItem] = useState();

    const inputField = useRef();
    const saveButton = useRef();
    const saveChangedBtn = useRef();

    const handleSaveWork = ()=> {
        setTodoList(pre => {
            if(work !=='') {
                const newList = [...pre,work];
                    localStorage.setItem('todo', JSON.stringify(newList));
                return newList;
            }
            else {
                return pre;
            }
        });
        setWork('');
        inputField.current.focus();
        console.log('set');
    }

    const handleSubmitInput = (event)=> {
        if(event.keyCode ===13) {
            event.preventDefault();
            toggleBtn ? saveChangedBtn.current.click():saveButton.current.click();
        }
    }

    const handleDelete = (index)=> {
        setTodoList(pre => {
            const newList = [...pre];
            newList.splice(index,1);
            localStorage.setItem('todo', JSON.stringify(newList));
            return newList;
        });
    }

    const handleEdit = (index) => {
        setWork(todoList[index]);
        setEditItem(index);
        setToggleBtn(!toggleBtn);
        inputField.current.focus();
    }

    const handleChangedWork = () => {
        setTodoList(pre => {
            const newList = [...pre];
            newList.splice(editItem, 1, work);
            localStorage.setItem('todo', JSON.stringify(newList));
            return newList;
        });
        setWork('');
        inputField.current.focus();
        setToggleBtn(!toggleBtn);
    }

    return (
        <div id='todo-app__body'>
            <div
                className={"todo-app__input" + (toggleTheme?" app-theme-body__dark":" app-theme-body__light")}>
                <input
                    ref={inputField}
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                    onKeyUp={handleSubmitInput}
                    placeholder="Create work..." 
                />
                {toggleBtn ?
                    (<button
                        ref={saveChangedBtn}
                        onClick={handleChangedWork}
                    >
                        confirm
                    </button>):
                    (<button
                        ref={saveButton}
                        onClick={handleSaveWork}
                        >
                        Save
                    </button>)
                }
            </div>
            <ul className={"todo-app__list" + (toggleTheme?" app-theme-body__dark":" app-theme-body__light")}>
            {
                (todoList.length >=1)?
                todoList.map((work, index) => {
                    return (
                        <li className="todo-app__list-item" key={index}>
                            <div className="list-item__content">
                                <TodoCheckBox
                                />
                                <label>
                                    {(toggleBtn&&editItem === index)?inputField.current.value:work}
                                </label>
                            </div>
                            <div className="list-item__edit-field">
                                <button
                                    onClick={()=> handleDelete(index)}
                                >
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                                <button
                                    onClick={()=> handleEdit(index)}
                                >
                                    <i className="bi bi-pencil-fill"></i>
                                </button>
                            </div>
                        </li>
                    )
                })
                :<TodoEmpty />
            }
            </ul>
        </div>
    )
}

export default TodoBody;
