import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './TodoList.css';

const TodoList = ({ items, setItems, setEdit }) => {
    const deleteItem = (id) => {
        const deleteOne = items.filter((item) => item.id !== id);
        setItems(deleteOne);
    };

    const editItem = (id) => {
        const findOne = items.find((item) => item.id === id);
        setEdit(findOne);
    };

    return (
        <div className="container-list">
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <div key={id} className="list">
                        <div>{title}</div>
                        <div className="list__action">
                            <FaEdit onClick={() => editItem(id)} className="list__action--edit" />
                            <FaTrashAlt
                                onClick={() => deleteItem(id)}
                                className="list__action--delet"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
