import React, { useRef, useState } from 'react';
import List from './list';

const Todo = () => {
    const [data, setData] = useState("")
    const [list, setList] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    let inputBox = useRef(null)
    const handleBtn = () => {
        if (data !== "") {
            setList([...list, data])
            setData("")

        }
    }
    const handleDelete = (key) => {
        let newList = [...list]
        newList.splice(key, 1)
        setList(newList)
    }

    const handleEdit = (item) => {
        setIsClicked(true)
        inputBox.current.focus()
        setData(item)

    }

    const handleUpdate = (index) => {
        setIsClicked(false)
        let newList = [...list]
        if(data){
            newList[index] = data
            setList(newList)
            setData("")
        }
       else{
        alert("Cant be empty")

       }


    }


    return (
        <div className='bg-[#FFEDFA] h-screen '>
            <div className='container py-8 flex-col flex-wrap h-full justify-self-center w-1/2 '>
                <div className='bg-[#4F959D] h-screen rounded-2xl pt-2.5'>
                    <h2 className='text-4xl text-white mt-5 ml-5 '>👋Getting Started</h2>
                    <div >
                        <input type="text" placeholder="Enter your todo......" ref={inputBox} value={data} onChange={(e) => setData(e.target.value)} className="bg-black p-2 mt-10 ml-9 w-11/14 h-10 shadow-black shadow-2xl text-white rounded-2xl border-none outline-none placeholder:text-gray-100 focus:ring-2 focus:ring-green-600" />
                        <button className="bg-yellow-400 text-white ml-4 p-2 mt-8 rounded-2xl border-none outline-none hover:bg-yellow-500 " onClick={handleBtn} style={{display:isClicked?"none":"inline"}}>Add-To</button>
                        <div className=' content-div mt-8 flex-col justify-self-start w-11/12'>
                            <h1 style={{ display: list.length ? "block" : "none" }} className='text-4xl text-center text-white italic'>TO-DO LIST </h1>
                            {list.map((item, index) => {
                                return (
                                    <List list={list} key={index} item={item} index={index} handleDelete={handleDelete} handleEdit={handleEdit} handleUpdate={handleUpdate} isClicked={isClicked} />
                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Todo;
