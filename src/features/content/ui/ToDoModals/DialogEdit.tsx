import { Button } from '../../../../shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../../shared/components/ui/dialog'
import { Input } from '../../../../shared/components/ui/input'
import type { Task } from '../../../../shared/types/task'

export function DialogEdit({
  isOpen,
  task,
  handleClose,
  handleChangeInput,
  isEditLoading,
  handleEditTask
}: {
  isOpen: boolean
  task: Task
  handleClose: () => void
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  isEditLoading: boolean
  handleEditTask: () => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Редактировать заметку</DialogTitle>
          <DialogDescription>
            <Input value={task.title} onChange={handleChangeInput} />
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-[10px]">
          <Button onClick={handleClose} variant="white">
            Отмена
          </Button>
          <Button disabled={isEditLoading || !task.title.trim()} onClick={handleEditTask} variant="gradient">Сохранить</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
