import type { Task } from '../../../shared/types/task'
import { DialogEdit } from './ToDoModals/DialogEdit'
import { DrawerEdit } from './ToDoModals/DrawerEdit'

export const ToDoTaskEdit = ({
  isMobile,
  editIsOpen,
  task,
  closeEdit,
  handleChangeInput,
  isEditLoading,
  handleEditTask
}: {
  isMobile: boolean
  editIsOpen: boolean
  task: Task | null
  closeEdit: () => void
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  isEditLoading: boolean
  handleEditTask: () => void
}) => {
  if (!task) return
  return (
    <>
      {isMobile ? (
        <DrawerEdit
          isOpen={editIsOpen}
          task={task}
          handleClose={closeEdit}
          handleChangeInput={handleChangeInput}
          isEditLoading={isEditLoading}
          handleEditTask={handleEditTask}
        />
      ) : (
        <DialogEdit
          isOpen={editIsOpen}
          handleClose={closeEdit}
          task={task}
          handleChangeInput={handleChangeInput}
          isEditLoading={isEditLoading}
          handleEditTask={handleEditTask}
        />
      )}
    </>
  )
}
