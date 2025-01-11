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
        document.querySelector(".navContainer").style.background = theme === "fantasy" ? "#ffff" : "#20161f"
        
    }, [theme]);

    return (
        <div className="flex items-center gap-2">
            <button
                className="px-3"
                onClick={toggleTheme}
            >
                {theme === "coffee" ? <FaMoon className="text-sky-300" size={20} /> : <AiFillSun fill="gold" size={20}/>}
            </button>
        </div>
    );
}

export default SwitchTheme;
