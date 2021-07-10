import AddTodo from './addTodos/AddTodo';
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="container__items">
                <h3>Todo App</h3>
                <AddTodo />
            </div>
        </div>
    );
}

export default App;
