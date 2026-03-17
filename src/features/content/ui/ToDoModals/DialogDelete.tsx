import { Button } from '../../../../shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../../shared/components/ui/dialog'
import type { Task } from '../../../../shared/types/task'

export function DialogDelete({
  isOpen,
  handleClose,
  task,
  handleDeleteTask,
  isLoading,
}: {
  isOpen: boolean
  handleClose: () => void
  task: Task
  handleDeleteTask: () => void
  isLoading: boolean
}) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Удалить заметку</DialogTitle>
          <DialogDescription>{task.title}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-[10px]">
          <Button onClick={handleClose} variant="white">
            Отмена
          </Button>
          <Button
            disabled={isLoading}
            onClick={handleDeleteTask}
            variant="gradient"
          >
            Удалить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
