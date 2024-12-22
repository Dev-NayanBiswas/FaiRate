import React, { useState, useEffect } from "react";
import { AiFillSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function SwitchTheme() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "fantasy");

    const toggleTheme = () => {
        const newTheme = theme === "fantasy" ? "coffee" : "fantasy";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        // document.querySelector(".navContainer").style.background = `${theme === "coffee" ? "#1d232a" : "#f8fdef"}` 
        
    }, [theme]);

    return (
        <div className="flex items-center gap-2">
            <button
                className="p-2 mx-2 bg-defaultColor/15 rounded-full"
                onClick={toggleTheme}
            >
                {theme === "coffee" ? <FaMoon className="text-sky-300" size={20} /> : <AiFillSun fill="gold" size={20}/>}
            </button>
        </div>
    );
}

export default SwitchTheme;
