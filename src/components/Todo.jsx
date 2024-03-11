import "../styles/styles.css"
export const Todo = () => {
    return(
        <div className="w-screen mx-auto h-auto fondo">
            <div className='max-w-xl mx-auto'>
                <div className="flex justify-between mx-6 pt-14">
                    <h1 className="font-josefin font-bold text-custom-light-theme-Very-Light-Gray text-3xl tracking-[.5rem]">TODO</h1>
                    <img className="bg-cover h-full w-auto" src="/public/icon-sun.svg" />
                </div>
                <div className="pt-8 pb-11">
                    <div className="flex mx-6 relative bg-custom-dark-theme-Very-Dark-Desaturated-Blue rounded-lg">
                        <div className="chekbox h-14 w-14 bg-transparent"></div>
                        <input className="w-full font-josefin text-lg py-3 px-2 bg-transparent" type="text" placeholder="create a new todo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}