
function TodoBody() {
    return (
        <>
            <div className="todo-app__input">
                <input placeholder="Create work..." />
                <button>Save</button>
            </div>
            <ul className="todo-app__list">
                <li className="todo-app__list-item">
                    <div className="list-item__content">
                        <input type="checkbox" />
                        <label>option</label>
                    </div>
                    <div className="list-item__edit-field">
                        <button>
                            <i class="bi bi-trash-fill"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                </li>
                <li className="todo-app__list-item">
                    <div className="list-item__content">
                        <input type="checkbox" />
                        <label>option</label>
                    </div>
                    <div className="list-item__edit-field">
                        <button>
                            <i class="bi bi-trash-fill"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                </li>
                <li className="todo-app__list-item">
                    <div className="list-item__content">
                        <input type="checkbox" />
                        <label>option</label>
                    </div>
                    <div className="list-item__edit-field">
                        <button>
                            <i class="bi bi-trash-fill"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default TodoBody;
