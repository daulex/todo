'use client'


import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <div className="max-w-md mx-auto p-2">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  )
}
