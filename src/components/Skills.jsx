import { useState } from "react";

import css3 from '../assets/icons/css.svg'
import html5 from '../assets/icons/html5.svg'
import javaScript from '../assets/icons/javascript.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import react from '../assets/icons/React_light.svg'
import tailwindcss from '../assets/icons/tailwindcss.svg'
import vite from '../assets/icons/vitejs.svg'
import sass from '../assets/icons/sass.svg'
import jQuery_dark from '../assets/icons/jQuery_dark.svg'
import jQuery_light from '../assets/icons/jQuery_light.svg'
import figma from '../assets/icons/figma.svg'
import ubuntu from '../assets/icons/ubuntu.svg'
import vsCode from '../assets/icons/vscode.svg'
import gitHub from '../assets/icons/GitHub_light.svg'
import git from '../assets/icons/git.svg'

const mySkills = [
{
  name: "CSS",
  icon: css3,
  category: "frontend"
},
{
  name: "HTML",
  icon: html5,
  category: "frontend",
},
{
  name: "JavaScript",
  icon: javaScript,
  category: "frontend",
},
{
  name: "React",
  icon: react,
  category: "frontend",
},
{
  name: "Tailwind",
  icon: tailwindcss,
  category: "frontend",
},
{
  name: "Sass",
  icon: sass,
  category: "frontend",
},
{
  name: "Boot Strap",
  icon: bootstrap,
  category: "frontend",
},
{
  name: "Vite",
  icon: vite,
  category: "tools",
},
{
  name: "jQuery",
  icon: jQuery_dark,
  category: "frontend",
},
{
  name: "jQuery",
  icon: jQuery_light,
  category: "frontend",
},
{
  name: "Figma",
  icon: figma,
  category: "tools",
},
{
  name: "Ubuntu",
  icon: ubuntu,
  category: "tools",
},
{
  name: "VsCode",
  icon: vsCode,
  category: "tools",
},
{
  name: "Github",
  icon: gitHub,
  category: "tools",
},
{
  name: "Git",
  icon: git,
  category: "tools",
},
];


const categories = ["all", "frontend", "tools"];


const Skills = () => {

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = mySkills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Tech <span className="text-primary">Stack</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {
            categories.map((category, index) => (
              <button 
                key={index} 
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer ${
                  activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary``"
                }`}
              >
                {category}
              </button>
            ))
          }
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            filteredSkills.map((skill, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-center flex-col">
                <img 
                  src={skill.icon} 
                  alt="icons" 
                  className="w-16 h-14"
                />
                <p className="text-xs mt-2">
                  {skill.name}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
