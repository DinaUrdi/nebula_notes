import useSWR from "swr";
import { fetcher } from "../../../../shared/api/fetcher";
import type { Task } from "../../../../shared/types/task";

export function useGetTasks() {
  const { data: tasks, } = useSWR<Task[]>('/list', fetcher)

  return { tasks };
}


