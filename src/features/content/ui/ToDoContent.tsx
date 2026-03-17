import { useState } from 'react'
import { ToDoTasksList } from './ToDoTasksList'
import useDeviceDetect from '../../../shared/hooks/useDeviceDetected'
import type { Task } from '../../../shared/types/task'
import { ToDoTaskDelete } from './ToDoTaskDelete'
import { ToDoTaskEdit } from './ToDoTaskEdit'
import { useDeleteTask } from '../services/hooks/useDeleteTask'
import { useEditTask } from '../services/hooks/useEditTask'

export const ToDoContent = () => {
  const { isMobile } = useDeviceDetect()
  const [task, setTask] = useState<Task | null>(null)
  const [deleteIsOpen, setDeleteIsOpen] = useState(false)
  const [editIsOpen, setEditIsOpen] = useState(false)

  const openDelete = (task: Task) => {
    setDeleteIsOpen(true)
    setTask(task)
  }
  
  const closeDelete = () => {
    setDeleteIsOpen(false)
  }

  const openEdit = (task: Task) => {
    setEditIsOpen(true)
    setTask(task)
  }
  const closeEdit = () => {
    setEditIsOpen(false)
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => {
      if (!prev) return null
      return {
        ...prev,
        title: e.target.value,
      }
    })
  }

  const { deleteTask, isLoading } = useDeleteTask()
  const handleDeleteTask = () => {
    if (!task) {
      console.error('отсутствует task')
      return
    }
    deleteTask(task.id)
    closeDelete()
  }

  const { editTask, isEditLoading } = useEditTask()
  const handleEditTask = () => {
    if (!task) {
      console.error('отсутствует task')
      return
    }
    editTask(task)
    closeEdit()
  }

  return (
    <div
      id={'content'}
      className="h-min-screen flex w-full flex-col gap-[20px] px-[20px] pt-[222px] pb-[10px] md:max-w-[680px] md:pt-[202px]"
    >
      <ToDoTasksList openDelete={openDelete} openEdit={openEdit} />

      <ToDoTaskDelete
        isLoading={isLoading}
        isMobile={isMobile}
        task={task}
        deleteIsOpen={deleteIsOpen}
        closeDelete={closeDelete}
        handleDeleteTask={handleDeleteTask}
      />
      <ToDoTaskEdit
        isMobile={isMobile}
        editIsOpen={editIsOpen}
        task={task}
        closeEdit={closeEdit}
        handleChangeInput={handleChangeInput}
        isEditLoading={isEditLoading}
        handleEditTask={handleEditTask}
      />
    </div>
  )
}
