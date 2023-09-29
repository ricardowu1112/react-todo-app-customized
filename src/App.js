// KindaCode.com
// src/App.js
import React, {useState,useEffect} from "react";
import './App.scss';
import './components/MySwitch.css'
import { EditableText } from "./components/EditableText";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
function App() {
  // state for the first swtich
  const [valueOne, setValueOne] = useState(false);

  // state for the second swtich
  // const [valueTwo, setValueTwo] = useState(false);

  const [todos, setTodos] = useState([]);

  const [todoEditing, setTodoEditing] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    let todo = document.getElementById('todoAdd').value

    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo));
    } else {

        alert("Enter Valid Task");
    }
    document.getElementById('todoAdd').value = ""
  }

  // this function is called when the first switch is toggled
  const handleChangeOne = () => {
    setValueOne(!valueOne);
  };

  // this function is called when the second switch is toggled
  // const handleChangeTwo = () => {
  //   setValueTwo(!valueTwo);
  // };

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
            <textarea style = {{"font-family":"Georgia","margin-right":"10px","padding-left":"3.6%","padding-right":"3.6%",width:"82%" ,height:"auto",resize:"none","border-radius":"4px", "font-size":"13px", "letter-spacing":"1px"}} class="input__field" id = 'todoAdd' type="text" placeholder=" " rows = "2" cols = "4" > </textarea>
            <button style={{cursor:"pointer"}} type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => 
          <div className="todo" key={todo.id}>
                  <div className='kindacard'>

                        <div className='box-container' id="list-box-container" style={{ width:"68%", height:"auto", resize:"vertical",  wordWrap: "break-word",  "letter-spacing":"1px"}}>
                          <EditableText value={todo.text}/>
                        {/* <span className="todo-text" style={{"font-size":"13px","font-family":"Georgia"}}>{todo.text}</span> */}
                        </div>

                        <div id="button-container"> 
                          <label className='my-switch'>
                            <input type='checkbox' id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/> 
                            <span className="slider rounded" />
                          </label>
                        </div>
                      {/* <div class= "vertical" style={{"border-left": "1px solid black", height:"40px"}}></div> */}
                      {/* <div style={{"margin-left":-10, "margin-right":-15}}>
                        <button style={{border:"none", outline:"none", backgroundColor: "transparent", color:"red", fontSize:"20px", cursor:"pointer"}} onClick={() => deleteTodo(todo.id)}>X</button>
                      </div> */}
                      
                      {/* <button aria-label='delete item' onClick='alert("You deleted the item!")' type='button'>X</button> */}
                    </div>
              {/* <div className="todo-text">{todo.text}</div> */}
            </div>)}

      {/* <div className='kindacard'>
        <div className='box-container'>
          <span>Show the box?</span>
        </div>
        <MySwitch value={valueOne} onChange={handleChangeOne} rounded={true} />
      </div> 


      {valueOne && <div className='box'></div>}
      

      {/* <div className='card'>
        <span>Reveal the secret?</span>
        <MySwitch value={valueTwo} onChange={handleChangeTwo} rounded={false} />
      </div>


      {valueTwo && <div className='secret'>1 + 1 = 2</div>} */}
    </div>


  );
}

export default App;