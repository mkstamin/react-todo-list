import React, { useEffect, useState } from 'react';
import Alert from '../alert/Alert';
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
    const [add, setAdd] = useState();
    const [edit, setEdit] = useState();
    const [alert, setAlert] = useState({ type: '', message: '' });

    // Alert semmage
    const showAlert = (type, message) => setAlert({ type, message });

    // Add and Edit items
    const addItem = (e) => {
        e.preventDefault();

        if (!add) {
            showAlert('danger', 'please provide a value');
        } else if (typeof edit === 'object') {
            // For edit & update
            const { id } = edit;
            setItems(
                items.map((item) => {
                    if (item.id === id) {
                        return { ...item, title: add };
                    }
                    return item;
                })
            );
            showAlert('success', 'Edit successfully');
            setEdit('');
            setAdd('');
        } else {
            // This is for add items
            const newValue = { id: new Date().getTime(), title: add };
            setItems([...items, newValue]);
            showAlert('success', 'item add successfully');
            setAdd('');
        }
    };

    useEffect(() => {
        localStorage.setItem('myList', JSON.stringify(items));
    }, [items]);

    return (
        <>
            <Alert alert={alert} removeAlert={showAlert} />
            <div className="todo-container">
                <div className="todo-container__input">
                    <input
                        onChange={(e) => setAdd(e.target.value)}
                        value={add || ''}
                        type="text"
                        placeholder="e:g: tea"
                    />
                </div>
                <div onClick={addItem} role="button" tabIndex="0" className="todo-container__btn">
                    <button type="button">
                        {typeof edit !== 'object' ? 'Add' : 'Update'} Item
                    </button>
                </div>
            </div>
            <TodoList
                items={items}
                setItems={setItems}
                setAdd={setAdd}
                setEdit={setEdit}
                showAlert={showAlert}
            />
        </>
    );
};

export default AddTodo;
