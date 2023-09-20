import { useState } from 'react'

export default function useTask() {
  const [tasks, setTasks] = useState({})
  return { tasks, setTasks }
}
