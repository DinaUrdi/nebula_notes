import { Button } from "../../../../shared/components/ui/button"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "../../../../shared/components/ui/drawer"
import { Input } from "../../../../shared/components/ui/input"
import type { Task } from "../../../../shared/types/task"

export function DrawerEdit({
  isOpen,
  task,
  handleChangeInput,
  handleClose,
  isEditLoading,
  handleEditTask
}: {
  isOpen: boolean
  task: Task
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClose: () => void
  isEditLoading: boolean
  handleEditTask: () => void
}) {
  return (
    <Drawer open={isOpen} onOpenChange={handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Редактировать заметку</DrawerTitle>
          <DrawerDescription>
            <Input value={task.title} onChange={handleChangeInput} />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button disabled={isEditLoading || !task.title.trim()} onClick={handleEditTask} variant={'gradient'} size={'drawer'}>
            Сохранить
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
