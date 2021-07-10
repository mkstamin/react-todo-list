import React, { useEffect, useRef, useState } from 'react';
import TodoList from '../todolists/TodoList';
import './AddTodo.css';

const getStorage = () => {
    let myList = localStorage.getItem('myList');

    if (myList) {
        myList = JSON.parse(localStorage.getItem('myList'));
        return myList;
    }
    return [];
};

const AddTodo = () => {
    const [items, setItems] = useState(getStorage());
    const [edit, setEdit] = useState({});
    const textInput = useRef(null);

    const addItem = (e) => {
        e.preventDefault();
        const inputValue = textInput.current.value;
        const newValue = { id: new Date().getTime(), title: inputValue };
        setItems([...items, newValue]);
        textInput.current.value = '';
    };

    useEffect(() => {
        localStorage.setItem('myList', JSON.stringify(items));
    }, [items]);

    console.log(Object.keys(edit).length <= 0);

    return (
        <>
            <div className="todo-container">
                <div className="todo-container__input">
                    {/* এখানে আমাকে onChange() নিয়ে কাজ করতে হবে। অন্য ক্ষেত্র value শুধু read only । ওন চেঞ্জ এ রিড রাইট দুটাই সম্ভব */}
                    <input ref={textInput} type="text" placeholder="e:g: tea" value={edit.title} />
                </div>
                <div onClick={addItem} role="button" tabIndex="0" className="todo-container__btn">
                    <button type="button">Add Item</button>
                </div>
            </div>
            <TodoList items={items} setItems={setItems} setEdit={setEdit} />
        </>
    );
};

export default AddTodo;
