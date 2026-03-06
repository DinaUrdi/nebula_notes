import { useGetTasks } from '../services/hooks/useGetTasks'
import { ToDoTask } from './ToDoTask'

export const ToDoTasksList = () => {
  const { tasks } = useGetTasks()

  if (!tasks) return <div>Loading...</div>

  return (
    <>
      {tasks.map((task) => {
        return <ToDoTask key={task.id} task={task} />
      })}
    </>
  )
}
