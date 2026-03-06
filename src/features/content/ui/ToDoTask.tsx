import { Pencil, Trash } from 'lucide-react'
import { Checkbox } from '../../../shared/components/ui/checkbox'
import { Button } from '../../../shared/components/ui/button'
import { cn } from '../../../shared/lib/utils'
import type { Task } from '../../../shared/types/task'

export const ToDoTask = ({ task }: {task: Task}) => {
  return (
    <div
      key={task.id}
      tabIndex={0}
      className="group text-primary focus:outline-accent flex h-[60px] w-full items-center justify-between rounded-[14px] bg-white px-[20px] font-semibold focus:outline-[1.5px] md:h-[40px] md:max-w-[680px]"
    >
      <div className="flex min-w-0 flex-1 items-center gap-[20px]">
        <Checkbox checked={task.isActivated} className="overflow-y-hidden" />

        <div
          className={cn(
            'line-clamp-2 min-w-0 flex-1 pr-[10px] break-words opacity-50 group-focus:opacity-100',
            { 'opacity-100': task.isActivated },
          )}
        >
          {task.title}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-[18px] overflow-y-hidden">
        <Button size={'icon'} variant={'icon'}>
          <Pencil />
        </Button>
        <Button size={'icon'} variant={'icon'}>
          <Trash />
        </Button>
      </div>
    </div>
  )
}
