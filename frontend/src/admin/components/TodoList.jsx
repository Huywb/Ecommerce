import { SlCalender } from "react-icons/sl";
import { TodoListData } from "../contants/DataAdmin";
const TodoList = () => {
    const date = Date.now()
  return (
    <div className="w-full ">
        <h3 className="text-white font-semibold p-2">
        Todo List   
        </h3>
        <div className=' bg-gray-200 flex items-center justify-center gap-2 py-2 rounded-lg'>
            <SlCalender /> 
            <h2>{new Date(date).toLocaleDateString('en-GB')}</h2>
        </div>
        <div className="mt-4 flex flex-col gap-2 max-h-70 overflow-scroll no-scrollbar text-white">
        {
            TodoListData.map((item,index)=>(
                <div key={index} className="border min-h-15 flex items-center overflow-hidden gap-4 p-2 px-2 border-gray-600 rounded-lg">
                    <input type="checkbox" checked={item.status} />
                    <p className="text-sm text-gray-400">{item.description}</p>
                </div>
            ))
        }
        </div>

    </div>
  )
}

export default TodoList
