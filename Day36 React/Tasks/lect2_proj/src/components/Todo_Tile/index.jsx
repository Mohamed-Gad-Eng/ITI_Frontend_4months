import { useState } from 'react';

export default function Tile({todo, handleDelete}){
    const [line, setLine] = useState(false);

    return(
        <>
            <div className="flex my-3 items-center">
                <button className="py-2 px-3 h-10 text-white hover:bg-red-400 rounded-sm hover:text-black bg-red-700 hover:cursor-pointer active:bg-red-950 active:text-white"  
                    onClick={()=>{handleDelete(todo.id)}}>
                        Delete
                </button>
                <button className="py-2 px-3 h-10 text-white hover:bg-green-300 rounded-sm hover:text-black mx-2 bg-green-700 hover:cursor-pointer active:bg-green-950 active:text-white"  
                    onClick={()=>{setLine(!line)}}>
                        Complete
                </button>
                <div className='pl-4 bg-white w-full min-h-10 border border-black rounded-sm flex items-center'>
                <h3 className={`${line && "line-through"}`}>
                    {todo.text}
                </h3>
                </div>
            </div>
        </>
    )
}
