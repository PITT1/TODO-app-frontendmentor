import { useState, useEffect } from "react";
import "../styles/styles.css";
import { Footer } from "./Footer";

export const Todo = () => {
    const [newToDo, setNewToDo] = useState("");
    const [item, setItem] = useState([]);

    var footerTodoNum = 0;

    const handleChange = (event) => {
        setNewToDo(event.target.value)
    }

    useEffect(() => {
    }, [newToDo]);

    const handleKeyDown = (event) => {
        if(event.key == "Enter" && newToDo.trim() !== ''){
            createNewItem()
        }
    };

    const createNewItem = () => {
        setItem([...item, newToDo]);
        setNewToDo("");
    }

    const handleClickCross = (index) => {
        const updateItems = item.filter((_,i) => {return(i !== index)});
        setItem(updateItems);
    }

    return(
        <div className="w-screen mx-auto h-auto fondo">
            <div className='max-w-xl mx-auto'>
                <div className="flex justify-between mx-6 pt-14">
                    <h1 className="font-josefin font-bold text-custom-light-theme-Very-Light-Gray text-3xl tracking-[.5rem] border-4">TODO</h1>
                    <img className="bg-cover h-full w-auto cursor-pointer" src="/public/icon-sun.svg" />
                </div>
                <div className="pt-8 pb-16">
                    <div className="shadow-lg flex mx-6 relative bg-custom-dark-theme-Very-Dark-Desaturated-Blue rounded-lg">
                        <div className="h-14 w-14 bg-transparent grid place-content-center">
                            <div className="chekbox h-3 w-3 scale-110 rounded-full p-3 bg-center border border-solid border-custom-light-theme-Dark-Grayish-Blue"></div>
                        </div>
                        <input onKeyDown={handleKeyDown} onChange={handleChange} value={newToDo} className="w-full font-josefin text-lg py-3 px-2 bg-transparent text-custom-light-theme-Very-Light-Gray" type="text" placeholder="create a new todo"/>

                        <div className="absolute top-[130%] w-full left-0 bg-custom-dark-theme-Very-Dark-Desaturated-Blue rounded-lg shadow-2xl">
                            <ul className="w-full">
                                {
                                    item.map((item, index) => {
                                        const itemClass = index > 0 ? "border-item" : "";
                                        footerTodoNum = index + 1;
                                        return (
                                            <li key={index} className={`${itemClass} flex justify-between px-4 py-4 font-josefin text-custom-light-theme-Light-Grayish-Blue`}>
                                                <div className="flex">
                                                    <div className="button">
                                                        <input type="checkbox" id="custom-btn"/>
                                                        <label className="lbl-btn"></label>
                                                    </div>
                                                    <div className="cursor-pointer">
                                                        {item}
                                                    </div>
                                                </div>
                                                <button onClick={() => handleClickCross(index)} className="btn-cross bg-no-repeat h-4 w-4 mr-3 mt-1"></button>
                                            </li>
                                        )
                                    })}
                            </ul>
                            <Footer taskNum={footerTodoNum} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}