import type { Task } from '../../../shared/types/task'
import { DialogDelete } from './ToDoModals/DialogDelete'
import { DrawerDelete } from './ToDoModals/DrawerDelete'

export const ToDoTaskDelete = ({
  isMobile,
  deleteIsOpen,
  task,
  closeDelete,
  handleDeleteTask,
  isLoading,
}: {
  isMobile: boolean
  deleteIsOpen: boolean
  task: Task | null
  closeDelete: () => void
  handleDeleteTask: () => void
  isLoading: boolean
}) => {
  if (!task) return
  return (
    <>
      {isMobile ? (
        <DrawerDelete
          isOpen={deleteIsOpen}
          task={task}
          handleClose={closeDelete}
          handleDeleteTask={handleDeleteTask}
          isLoading={isLoading}
        />
      ) : (
        <DialogDelete
          isOpen={deleteIsOpen}
          handleClose={closeDelete}
          task={task}
          handleDeleteTask={handleDeleteTask}
          isLoading={isLoading}
        />
      )}
    </>
  )
}
