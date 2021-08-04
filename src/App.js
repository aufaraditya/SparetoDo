import React, {useState, useEffect} from 'react';
import './App.css';
import Forms from './components/Forms';
import ToDoList from './components/ToDoList';


const LOCAL_STORAGE_KEY = "react-todo-list-todos";


function App() {
  const[inputText, setInputText] = useState("");
  const[inputTime, setInputTime] = useState("");
  const[todos, setTodos] = useState([]);
  const[filteredTodos, setFilteredTodos] = useState([]);
  const[filter,setFilter] = useState("All");

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    handleFilteredTodos();
    setLocalStorage();
  }, [todos,filter]);


  function setLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  };

  function getLocalStorage(){
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos);
    }
  }

  function handleFilteredTodos(){
      if (filter === 'All'){
        setFilteredTodos(todos);
      }
      else{
        setFilteredTodos(todos.filter((todo) => todo.time === filter));
      }
  };


  return (
    <div className="App">
      <header>
        <h1>Spare ToDo</h1>
        <h5>Spend Your Spare Time Wisely</h5>
      </header>
      <Forms 
      todos={todos}
      setTodos={setTodos}
      inputText={inputText}
      inputTime={inputTime}
      setInputText={setInputText} 
      setInputTime={setInputTime} 
      filter={filter}
      setFilter={setFilter}
      />
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
