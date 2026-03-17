import { useGetTasks } from '../../../shared/hooks/useGetTasks'
import type { Task } from '../../../shared/types/task'
import { useEditTask } from '../services/hooks/useEditTask'
import { ToDoTask } from './ToDoTask'

export const ToDoTasksList = ({
  openDelete,
  openEdit,
}: {
  openDelete: (task: Task) => void
  openEdit: (task: Task) => void
}) => {
  const { tasks } = useGetTasks()

  const { editTask } = useEditTask()

  const handleIsActiveTask = (task: Task) => {
    editTask({...task, isActivated: !task.isActivated})
  }

  if (!tasks) return <div>Loading...</div>

  return (
    <>
      {tasks.map((task) => {
        return (
          <ToDoTask
            handleIsActiveTask={handleIsActiveTask}
            openDelete={openDelete}
            openEdit={openEdit}
            key={task.id}
            task={task}
          />
        )
      })}
    </>
  )
}
