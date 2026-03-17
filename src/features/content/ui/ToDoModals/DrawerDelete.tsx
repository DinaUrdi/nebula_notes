import { Button } from '../../../../shared/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '../../../../shared/components/ui/drawer'
import type { Task } from '../../../../shared/types/task'

export function DrawerDelete({
  isOpen,
  task,
  handleClose,
  handleDeleteTask,
  isLoading,
}: {
  isOpen: boolean
  task: Task
  handleClose: () => void
  handleDeleteTask: () => void
  isLoading: boolean
}) {
  return (
    <Drawer open={isOpen} onOpenChange={handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Удалить заметку</DrawerTitle>
          <DrawerDescription>{task.title}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button disabled={isLoading}
            onClick={handleDeleteTask} variant={'gradient'} size={'drawer'}>
            Удалить
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
