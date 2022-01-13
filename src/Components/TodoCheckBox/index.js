import styles from './TodoCheckBox.module.css';

function TodoCheckBox() {
    return (
        <label className={styles.checkboxContainer}>
            <input type="checkbox"/>
            <span className={styles.checkmark}></span>
        </label>
    )
}

export default TodoCheckBox;
