import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("use of context outside provider");
  return context;
}

