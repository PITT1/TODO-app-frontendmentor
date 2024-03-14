
export const Footer = ({taskNum}) => {
    const condition = taskNum > 0 ? "flex" : "hidden";
    return (
        <footer className={`${condition} relative border-item font-josefin text-custom-light-theme-Dark-Grayish-Blue justify-between text-sm`}>
            <p className="pl-5 py-3">{taskNum} items left</p>
            <div className="shadow-xl sm:shadow-none transition-all duration-300 text-lg rounded-lg sm:text-sm py-3 flex justify-center gap-3 absolute top-[140%] left-0 w-full bg-custom-light-theme-Very-Light-Gray dark:bg-custom-dark-theme-Very-Dark-Desaturated-Blue sm:relative sm:w-auto">
                <button className="hover:text-custom-light-theme-Very-Dark-Grayish-Blue dark:hover:text-custom-dark-theme-Light-Grayish-Blue focus:text-custom-Bright-Blue">all</button>
                <button className="hover:text-custom-light-theme-Very-Dark-Grayish-Blue dark:hover:text-custom-dark-theme-Light-Grayish-Blue focus:text-custom-Bright-Blue">active</button>
                <button className="hover:text-custom-light-theme-Very-Dark-Grayish-Blue dark:hover:text-custom-dark-theme-Light-Grayish-Blue focus:text-custom-Bright-Blue transition-all">completed</button>
            </div>
            <button className="duration-300 pr-5 py-3 hover:text-custom-light-theme-Very-Dark-Grayish-Blue dark:hover:text-custom-dark-theme-Light-Grayish-Blue transition-all">clear completed</button>
            <h3 className="cursor-default absolute top-[340%] sm:top-[200%] left-0 w-full text-center">Drag and drop to reorder list</h3>
        </footer>
    )
};