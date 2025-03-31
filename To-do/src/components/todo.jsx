import React, { useEffect, useRef, useState } from 'react';
import List from './list';

const Todo = () => {
    const [data, setData] = useState("")
    const [list, setList] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    let inputBox = useRef(null)

    const handleBtn = () => {



        if (data.trim() == "") {
            setData("")

        }
        else {
            setList([...list, data.trim()])
            //validation for whiteSpace only 
                setData("");
           

            //setting in local storage keeping first item also
            localStorage.setItem('list', JSON.stringify([...list, data]))
            setData("")
        }
        //validation so that empty string should not get stored in list








    }
    const handleDelete = (key) => {
        let newList = [...list]
        newList.splice(key, 1)
        setList(newList)
        //delete functionality in local storage
        localStorage.setItem('list', JSON.stringify(newList))
    }


    const handleEdit = (item,) => {
        setIsClicked(true)
        inputBox.current.focus()
        setData(item)




    }

    const handleUpdate = (index) => {
        setIsClicked(false)
        if (data) {
            let newList = [...list]
            newList[index] = data
            setList(newList)
            //update functionality in local storage
            localStorage.setItem('list', JSON.stringify(newList))
            setData("")
            console.log(index);
        }
        else {
            alert("Cant be empty")

        }



    }
    //getting data from local storage now 
    useEffect(() => {
        const storedList = localStorage.getItem('list')
        if (storedList) {
            setList(JSON.parse(storedList))
        }
        console.log(storedList);
    }, [])



    return (
        <div className='bg-[#FFEDFA] h-screen '>
            <div className='container py-8 flex-col flex-wrap h-full justify-self-center w-1/2 '>
                <div className='bg-[#4F959D] h-auto w-auto rounded-2xl pt-2.5'>
                    <h2 className='text-4xl text-white mt-5 ml-5 '>👋Getting Started</h2>
                    <div className='h-auto w-auto' >
                        <input type="text" placeholder="Enter your todo......" ref={inputBox} value={data} onChange={(e) => setData(e.target.value)} className="bg-black p-2 mt-10 ml-9 w-11/14 h-10 shadow-black shadow-2xl text-white rounded-2xl border-none outline-none placeholder:text-gray-100 focus:ring-2 focus:ring-green-600" />
                        <button className="bg-yellow-400 text-white ml-4 p-2 mt-8 rounded-2xl border-none outline-none hover:bg-yellow-500 " onClick={handleBtn} style={{ display: isClicked ? "none" : "inline" }}>Add-To</button>  <button className="bg-indigo-400 text-white ml-3 h-10 w-20 mt-8 rounded-2xl border-none outline-none hover:bg-indigo-500 " onClick={() => handleUpdate()}>Update</button> :
                        <div className=' content-div mt-8 flex-col justify-self-start w-11/12'>
                            <h1 style={{ display: list.length ? "block" : "none" }} className='text-4xl text-center text-white italic'>TO-DO LIST </h1>
                            {list.map((item, index) => {
                                return (

                                    <List key={index} list={list} item={item} index={index} handleDelete={handleDelete} handleEdit={handleEdit} handleUpdate={handleUpdate} isClicked={isClicked} />

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
