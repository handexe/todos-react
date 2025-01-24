import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
export default function Form({ createTodo }) {
  const { content, setContent, addTodo, inputRef } = useContext(TodoContext);
  //inputa focus
  useEffect(() => {
    inputRef.current.focus();
  }, [content]);

  return (
    <form
      className="w-full max-w-md font-primary mb-3"
      onSubmit={() => addTodo(event, content)}>
      <div className="flex flex-col sm:flex-row sm:items-center">
        <input
          id="first-name"
          name="first-name"
          type="text"
          autoComplete="given-name"
          placeholder="Name"
          className="w-full sm:w-2/3 rounded-md border-0 px-3.5 py-2 text-gray-900 bg-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2 sm:mb-0 sm:mr-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          ref={inputRef}
        />
        <button
          disabled={!content}
          type="submit"
          className="w-full sm:w-auto rounded-md bg-cyan-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Ekle
        </button>
      </div>
    </form>
  );
}
