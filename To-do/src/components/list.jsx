import React from 'react';
import { useState } from 'react';
const List = ({ list, item, handleDelete, index, handleEdit, handleUpdate, isClicked }) => {
    const [show, setShow] = useState(true)
    const handleComplete = () => {
        setShow(!show)
        console.log(list);
    }
    return (
        <div className='flex'>
            <p type="text" style={{ textDecoration: show ? "none" : "line-through", backgroundColor: show ? "white" : "black", transition: "all 2s", color: show ? "black" : "white" }} className=" px-3 p-0.5 mt-8 ml-9 text-2xl w-11/16 h-auto shadow-black shadow-2xl text-black rounded-2xl border-none outline-none">{item}</p>
            <button className=" mt-8 ml-3 rounded-2xl h-10 w-20 text-white bg-red-400 hover:bg-red-700" style={{ display: isClicked ? "none" : "inline" }} onClick={() => handleDelete(index)}>Delete</button>
            <button className=" mt-8 ml-3 rounded-2xl h-10 w-20 text-white bg-blue-400 hover:bg-blue-700" style={{ display: isClicked ? "none" : "inline" }} onClick={() => handleComplete()}>Done</button>
            {
                isClicked ? <button className="bg-indigo-400 text-white ml-3 h-10 w-20 mt-8 rounded-2xl border-none outline-none hover:bg-indigo-500 " onClick={() => handleUpdate(index)}>Update</button> : <button className=" mt-8 ml-3 rounded-2xl h-10 w-20 text-white bg-green-400 hover:bg-green-700" onClick={() => handleEdit(item, index)} >Edit</button>
            }

        </div>

    );
}

export default List;
