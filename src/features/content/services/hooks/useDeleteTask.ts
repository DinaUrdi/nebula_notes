import { useState } from 'react'
import { useGetTasks } from '../../../../shared/hooks/useGetTasks'
import { api } from '../../../../shared/api/api'

export function useDeleteTask() {
  const [isLoading, setIsLoading] = useState(false)

  const { mutate } = useGetTasks()
  const deleteTask = async (id: number) => {
    try {
      setIsLoading(true)
      await api.delete(`/list/${id}`)
      await mutate()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { deleteTask, isLoading, mutate }
}
