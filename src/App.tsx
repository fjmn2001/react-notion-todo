import { useState } from "react"

interface Task {
  id: string
  task: string
}

export const App = () => {
  const [tasks] = useState<Array<Task>>([
    { id: "dd", task: "Task one" },
    { id: "ee", task: "Task two" },
  ])

  return (
    <div>
      <h1>React Notion Todo</h1>
      <hr />
      <form action="">
        <input type="text" />
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.task}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}
