import { useState } from 'react'
import { api } from '../../../../shared/api/api'
import { useGetTasks } from '../../../../shared/hooks/useGetTasks'

export function useAddTask() {
  const [isLoading, setIsLoading] = useState(false)
  const { mutate } = useGetTasks()
  const addTask = async (task: string) => {
    try {
      setIsLoading(true)
      await api.post('/list', { title: task })
      await mutate()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { addTask, isLoading }
}
