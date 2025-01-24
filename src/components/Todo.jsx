import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";

const Todo = ({ text, deleteTodo, editTodo, isEditable }) => {
  const [value, setValue] = useState(text.text);

  const handleClick = (e) => {
    e.preventDefault();
    editTodo(text.id); // editTodo fonksiyonu çağırılırken id gönderiliyor
  };

  return (
    <div className={`flex flex-col sm:flex-row justify-between items-center bg-zinc-700 py-2 px-2 rounded-md mb-1 cursor-pointer 
    ${isEditable ? "bg-zinc-700" : "bg-slate-300"}`}>
      <IoMdCheckmarkCircleOutline
          className={`text-2xl hover:text-white ${isEditable ? "text-green-500" : "text-zinc-900"  }`} // Buton rengini güncelliyoruz
          onClick={handleClick}
        />
        <input
        className= "w-full sm:w-4/5 outline-none bg-transparent p-1.5 rounded-md mb-2 sm:mb-0
           focus:text-white  focus:bg-zinc-800"
           
        value={value}
        style={{
          textDecoration: isEditable ? "line-through" : "none",
          cursor: "pointer", // Daha iyi kullanıcı deneyimi için.
        }}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex items-center gap-x-4">
        
        <AiTwotoneDelete
          className="text-2xl hover:text-red-700"
          onClick={() => deleteTodo(text.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
