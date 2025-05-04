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


const skills = [
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
  category: "frontend",
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
  category: "frontend",
},
];



const Skills = () => {
  return (
    <section id="#skills" className="py-24 px-4 relative bg-secondary/30">
      
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
        </h2>
      </div>
    </section>
  )
}

export default Skills
