import { ToDoContent } from "./features/content/ui/ToDoContent"
import { ToDoHeader } from "./features/header/ui/ToDoHeader"

function App() {
  return (
      <main className="w-full flex flex-col items-center justify-center">
        <ToDoHeader/>
        <ToDoContent/>
      </main>
  )
}

export default App