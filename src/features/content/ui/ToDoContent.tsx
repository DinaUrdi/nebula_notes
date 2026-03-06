import { ToDoTasksList } from "./ToDoTasksList"

export const ToDoContent = () => {
    return (
        <div id={"content"} className="md:pt-[202px] pt-[222px] h-screen w-full flex gap-[20px] flex-col px-[20px] md:max-w-[680px]">
            <ToDoTasksList/>
        </div>
    )
}