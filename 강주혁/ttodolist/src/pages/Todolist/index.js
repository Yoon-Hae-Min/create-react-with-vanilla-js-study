import Kreact from "../../core/Kreact"
import styles from './index.module.css'

export default function TodoList() {
  const [list, setList] = Kreact.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target[0].value;

    if (value === '') {
      alert('할 일을 입력해주세요');
      return;
    }

    setList(prev => {
      return [...prev, { id: prev.length, todo: value, idDone: false }]
    })

    e.target[0].value = '';
  };

  const handleCheckClick = (id) => {
    setList(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return { ...item, idDone: !item.idDone }
        }
        return item;
      })
    })
  };

  const handleDeleteClick = (id) => {
    setList(prev => {
      return prev.filter(item => item.id !== id)
    })
  }


  return (
    <div className={styles.todolist}>
      <h1 className={styles.todolist__title}>할 일을 적어보아요</h1>
      <form className={styles.todolist__form} onSubmit={handleSubmit}>
        <input type="text" placeholder="할 일을 적으세요" className={styles.todolist__form__input} />
        <button className={styles.todolist__form__add}>추가</button>
      </form>
      <ul className={styles.todolist__list}>
        {
          list.map((item, index) =>
          (
            <li key={index} className={styles.todolist__item}>
              <div style={{ display: 'flex' }}>
                {
                  item.idDone ?
                    <input type="checkbox" onClick={() => handleCheckClick(item.id)} checked />
                    :
                    <input type="checkbox" onClick={() => handleCheckClick(item.id)} />
                }
                <span className={styles.todolist__item__text}>{item.todo}</span>
              </div>
              <button className={styles.todolist__button__delete} onClick={() => handleDeleteClick(item.id)}>삭제</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}