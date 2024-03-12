import { useState } from "react";
import "../styles/styles.css";

export const Todo = () => {
    const [newToDo, setNewToDo] = useState("");

    const handleChange = (event) => {
        setNewToDo(event.target.value)
        console.log(newToDo);
    }

    return(
        <div className="w-screen mx-auto h-auto fondo">
            <div className='max-w-xl mx-auto'>
                <div className="flex justify-between mx-6 pt-14">
                    <h1 className="font-josefin font-bold text-custom-light-theme-Very-Light-Gray text-3xl tracking-[.5rem]">TODO</h1>
                    <img className="bg-cover h-full w-auto cursor-pointer" src="/public/icon-sun.svg" />
                </div>
                <div className="pt-8 pb-16">
                    <div className="shadow-lg flex mx-6 relative bg-custom-dark-theme-Very-Dark-Desaturated-Blue rounded-lg">
                        <div className="h-14 w-14 bg-transparent grid place-content-center">
                            <div className="chekbox h-3 w-3 scale-110 rounded-full p-3 bg-center border border-solid border-custom-light-theme-Dark-Grayish-Blue"></div>
                        </div>
                        <input onChange={handleChange} value={newToDo} className="w-full font-josefin text-lg py-3 px-2 bg-transparent text-custom-light-theme-Very-Light-Gray" type="text" placeholder="create a new todo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}