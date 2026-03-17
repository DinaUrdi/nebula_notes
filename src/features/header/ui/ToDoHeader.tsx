import { useState } from "react"
import { Button } from "../../../shared/components/ui/button"
import { InputWithAddon } from "../../../shared/components/ui/inputWithAddon"
import { useAddTask } from "../services/hooks/useAddTask"

export const ToDoHeader = () => {
    const [task, setTask] = useState('')
    const { addTask, isLoading } = useAddTask()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTask(event.target.value)
    const handleAddTask = () => {
      addTask(task)
      setTask('')
    }
    return (
        <div className="z-2 w-full flex flex-col items-center justify-center bg-white fixed top-0 left-0 rounded-bl-[20px] rounded-br-[20px]">
          <div className="w-full flex flex-col items-center md:gap-[31px] gap-[19px] md:pt-[59px] pt-[66px] md:pb-[20px] pb-[25px] px-[20px] max-w-[680px]">
            <h1 className="font-tenor uppercase text-[36px] tracking-[10%] leading-[112%] bg-gradient-to-r from-[#0B1838] to-[#4E4177] bg-clip-text text-transparent overflow-y-hidden">Nebula Notes</h1>
              <div className="flex w-full gap-[10px]">
                <InputWithAddon value={task} onChange={handleChange}/>
                <Button disabled={isLoading || !task.trim()} onClick={handleAddTask} variant={'gradient'}>Добавить</Button>
              </div>
          </div>
        </div>
    )
}