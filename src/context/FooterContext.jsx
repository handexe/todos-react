import React, { createContext, useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

export const FooterContext = createContext();
export const FooterProvider = ({ children }) => {
  const { todoList } = useContext(TodoContext);
  const [filter, setFilter] = useState("all");

  const todoLeft = todoList.filter((todo) => !todo.isCompleted);

  let filtered = todoList;
  if (filter !== "all") {
    filtered = todoList.filter((todo) =>
      filter === "active" ? !todo.isCompleted && todo : todo.isCompleted && todo
    );
  }

  const values = { todoLeft , setFilter , filtered} ;
  return(
    <FooterContext.Provider value={values}> { children }</FooterContext.Provider>
  )
};
