import { Button } from "../../../shared/components/ui/button"
import { InputWithAddon } from "../../../shared/components/ui/inputWithAddon"

export const ToDoHeader = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-white fixed top-0 left-0 rounded-bl-[20px] rounded-br-[20px]">
          <div className="w-full flex flex-col items-center md:gap-[31px] gap-[19px] md:pt-[59px] pt-[66px] md:pb-[20px] pb-[25px] px-[20px] max-w-[680px]">
            <h1 className="font-tenor uppercase text-[36px] tracking-[10%] leading-[112%] bg-gradient-to-r from-[#0B1838] to-[#4E4177] bg-clip-text text-transparent overflow-y-hidden">Nebula Notes</h1>
              <div className="flex w-full gap-[10px]">
                <InputWithAddon/>
                <Button variant={'gradient'}>Добавить</Button>
              </div>
          </div>
        </div>
    )
}