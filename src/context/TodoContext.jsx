import React, { createContext, useState, useRef, useContext } from "react";
import { v4 as uuid4 } from "uuid";
import { FooterContext } from "./FooterContext";

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const inputRef = useRef(null);

  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [newContent, setNewContent] = useState("");

  //Form Submit olduğunda yeni todo oluşturup listeye ekleme ve inputu temizleme
  const addTodo = (event, content) => {
    event.preventDefault();
    const newTodo = {
      id: uuid4(),
      text: content,
      isCompleted: false,
      isEditable: false,
    };
    setTodoList([...todoList, newTodo]);
    setContent("");
  };

  const deleteTodo = (id) => {
    setTodoList((prevList) =>
      prevList.filter((todo) => todo.id !== id && todo)
    );
  };

  const completedTodo = (id) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id && !todo.isEditable
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const editTodo = (id) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, isEditable: !todo.isEditable } : todo
      )
    );
  };

  const savedTodo = (id) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        newContent !== "" && todo.id === id
          ? { ...todo, isEditable: false, text: newContent }
          : todo
      )
    );
    setNewContent("");
  };

  const initialValue = {
    content,
    setContent,
    addTodo,
    todoList,
    setTodoList,
    deleteTodo,
    completedTodo,
    editTodo,
    newContent,
    setNewContent,
    savedTodo,
    inputRef,
  };

  return (
    <TodoContext.Provider value={initialValue}>{children}</TodoContext.Provider>
  );
};
