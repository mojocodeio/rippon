import React from "react";
import type { ReactElement } from "react";
import TodoList from "../components/TodoList";
import Header from "../components/Header";

export default function App(): ReactElement {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}
