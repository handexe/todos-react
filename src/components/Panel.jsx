import React, { useContext, useState } from "react";
import { FooterContext } from "../context/FooterContext";
import { TodoContext } from "../context/TodoContext";
const Panel = () => {
  //context propsları
  const { todoList, setTodoList } = useContext(TodoContext);
  const { setFilter, todoLeft } = useContext(FooterContext);
  return (
    <footer>
      <div className="footer max-w-md">
        <div className="counter" onClick={() => setFilter("active")}>
          <small>
            {todoLeft.length}
            {todoLeft.length === 1 ? " item" : " items"} left
          </small>
        </div>
        <ul className="filters">
          <li>
            <button className="filter" onClick={() => setFilter("all")}>
              All
            </button>
          </li>
          <li>
            <button className="filter" onClick={() => setFilter("active")}>
              Active
            </button>
          </li>
          <li>
            <button className="filter" onClick={() => setFilter("completed")}>
              completed
            </button>
          </li>
        </ul>
        <div>
          <button className="filter" onClick={() => setTodoList([])}>
            Clear completed
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Panel;
