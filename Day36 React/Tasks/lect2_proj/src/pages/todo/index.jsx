import Tile from "../../components/Todo_Tile";
import { useState } from "react";

class Todo{
    static nextId = 1;
    constructor(text){
        this.id = Todo.nextId;
        Todo.nextId++;
        this.text = text;
    }
}

export default function TodoPage() {
    const [list, setList] = useState([]);
    // const [input, setInput] = useState("");
    
    const handleDelete = (id) =>{
        const newList = list.filter((item)=>item.id !== id);
        setList(newList);
    }
    
    const handleAddition = () =>{
        const value = document.getElementById("task").value;
        const newTodo = new Todo(value)
        const newList = [...list];
        newList.push(newTodo);
        setList(newList);
        document.getElementById("task").value = ""
    }

    return (
        <>
            <div className="w-lg py-4 px-10 mx-auto mt-10 bg-blue-400 text-right">
                <h2 className="text-white text-2xl font-semibold">
                    To-Do App!
                </h2>
                <p className="text-xs py-2 text-white">Add New To-Do</p>
                {/* value={input} onChange={(e)=>setInput(e.target.value)} */}
                <input id="task" className="w-full px-2 py-1 bg-white border-none rounded-xs" placeholder="Enter new task" type="text"/>
                <button className="px-3 bg-white rounded-sm text-blue-900 border border-blue-900 my-3 hover:bg-gray-300 hover:cursor-pointer active:bg-black active:text-white"
                onClick={handleAddition}>Add</button>
            </div>
            <div className="w-lg mx-auto bg-gray-100 p-6">
                <h3 className="text-center text-gray-500 mb-6">Let's get some work done!</h3>
                {list.map((item)=>{
                    return <Tile todo={item} handleDelete={handleDelete} key={item.id}/>
                })}
            </div>
        </>
    )
}