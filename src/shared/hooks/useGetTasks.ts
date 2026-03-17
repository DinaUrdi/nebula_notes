import useSWR from 'swr'
import { fetcher } from '../api/fetcher'
import type { Task } from '../types/task'

export function useGetTasks() {
  const { data: tasks, mutate } = useSWR<Task[]>('/list', fetcher)

  return { tasks, mutate }
}
