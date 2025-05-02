import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';


const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark")
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const themeToggle = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={themeToggle} className={cn("fixed max-sm:hidden top-5 right-5 p-2 rounded-full z-50 transition-colors delay-300 focus:outline-hidden cursor-pointer")}
        >
            {
                isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-300"/>
                ) : (
                    <Moon className="h-6 w-6 text-blue-500" />
                )
            }
        </button>
    )
}
   
export default ThemeToggle;
 
