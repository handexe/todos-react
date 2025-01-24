import React, {useContext, useState, useEffect } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Panel from "./Panel";
import { FooterContext } from '../context/FooterContext'
import { TodoContext } from '../context/TodoContext'

const TodoList = () => {

  const [counter, setCounter] = useState(0); // Sayaç
  const {
    todoList,
    setTodoList,
    deleteTodo,
    completedTodo,
    editTodo,
    newContent,
    setNewContent,
    savedTodo,
    addTodo
  } = useContext(TodoContext);
  const { filtered } = useContext(FooterContext)

  //storegaya veri ekleme ve veriyi çekme işlemi
  useEffect(() => {
    const storedList = localStorage.getItem('todo')
    if (storedList) {
      setTodoList(JSON.parse(storedList))
    }
    //console.log(storedList)
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList))
  }, [todoList])



  return (
    <div className="container w-1/4 max-w-md m-auto bg-gray-500 mb-4 p-5 rounded-3xl">
      <Form createTodo={addTodo} />
      {Array.isArray(filtered) &&
        filtered.map((todo) => (
          <Todo
            text={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            isEditable={todo.isEditable} // isEditing'i buradan geçiriyoruz
          />
        ))}
      <Panel />
    </div>
  );
};

export default TodoList;



