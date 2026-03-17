import { useState } from 'react'
import { useGetTasks } from '../../../../shared/hooks/useGetTasks'
import { api } from '../../../../shared/api/api'
import type { Task } from '../../../../shared/types/task'

export function useEditTask() {
  const [isEditLoading, setIsLoading] = useState(false)

  const { mutate } = useGetTasks()
  const editTask = async (task: Task) => {
    try {
      setIsLoading(true)
      void mutate((currantData) => {
        if (currantData) {
          const newData = structuredClone(currantData)
          const idxCurrantTask = currantData.findIndex(
            (el) => el.id === task.id,
          )
          newData[idxCurrantTask].isActivated = task.isActivated
          newData[idxCurrantTask].title = task.title
          return newData
        }
      }, {revalidate: false})
      await api.patch(`/list/${task.id}`, {
        title: task.title,
        isActivated: task.isActivated,
      })
      await mutate()
    } catch (error) {
      console.error(error)
      await mutate()
    } finally {
      setIsLoading(false)
    }
  }

  return { editTask, isEditLoading, mutate }
}
