import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Form from "./components/Form";
import { TodoProvider } from "./context/TodoContext";
import { FooterProvider } from "./context/FooterContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" justify-center items-center mx-auto min-h-screen min-w-screen bg-slate-900">
      <TodoProvider>
        <FooterProvider>
          <Header />
          <TodoList />
        </FooterProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
