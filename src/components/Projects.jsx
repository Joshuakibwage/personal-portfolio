import { Github, ExternalLink, ArrowRight } from 'lucide-react';

import React from 'react'
import auth from '../assets/images/auth.png'
import cookBook from '../assets/images/cook-book.png'
import highIntensity from '../assets/images/high-intensity.png'
import cozyLiving from '../assets/images/cozy-living.png'
import digitalAgency from '../assets/images/digital-agency.png'
import codeTutor from '../assets/images/code-tutor.png'


const myProjects = [
    {
        id: 0,
        name: "Authentication UI",
        description: "A responsive and secure authentication page with login and signup functionality, featuring form validation and user-friendly UI.",
        image: auth,
        links: {
            live: "https://vercel.com/joshua-kibwages-projects/authentication-ui",
            github: "https://github.com/Joshuakibwage/authentication-ui",
        },
        tags: ["React", "Tailwind"],
    },
    {
        id: 1,
        name: "Cook Book",
        description: "CookBook is a smart recipe finder website that suggests delicious meals based on the ingredients you already have.",
        image: cookBook,
        links: {
            live: "https://cook-book-plum-theta.vercel.app/",
            github: "https://github.com/Joshuakibwage/cook-book",
        },
        tags: ["React", "Tailwind", "spoonacular API"],
    },
    {
        id: 2,
        name: "Cozy Living",
        description: "A modern furniture website showcasing stylish, functional pieces designed to elevate your living space with comfort and elegance.",
        image: cozyLiving,
        links: {
            live: "https://cozy-living-omega.vercel.app/",
            github: "https://github.com/Joshuakibwage/boot-strap-project/",
        } ,
        tags: ["HTML", "Bootstrap", "CSS"],
    },
    {
        id: 3,
        name: "High Intensity",
        description: "Gym website designed to motivate and empower users with dynamic workouts, expert training programs, and a community-driven fitness experience.",
        image: highIntensity,
        links: {
            live: "https://high-intensity-workout.vercel.app/",
            github: "https://github.com/Joshuakibwage/high-intensity-workout/",
        } ,
        tags: ["React", "Tailwind"],
    },
    {
        id: 4,
        name: "Digital Agency",
        description: "Modern website that showcases innovative digital solutions, from branding and web design to marketing strategies that help businesses grow online.",
        image: digitalAgency,
        links: {
            live: "https://digital-agency-ochre.vercel.app/",
            github: "https://github.com/Joshuakibwage/digital-agency/",
        } ,
        tags: ["React", "Tailwind"],
    },
    {
        id: 5,
        name: "Code Tutor",
        description: "Engaging landing page designed to connect aspiring developers with expert coding mentors, offering personalized lessons and hands-on learning experiences.",
        image: codeTutor,
        links: {
            live: "https://code-tutor-landingpage.vercel.app/",
            github: "https://github.com/Joshuakibwage/code-tutor-landingpage/",
        } ,
        tags: ["React", "Tailwind"],
    },
];



const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        From sleek interfaces to functional experiences, these projects reflect my journey, skills, and passion for front-end development in every pixel and line of code.
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                myProjects.map((project) => (
                    <div 
                        key={project.id} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image}
                                alt={project.title} 
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>


                        <div className="p-6 ">
                            <h3 className="text-l font-semibold mb-1 text-left">
                                {project.name}
                            </h3>
                            <p className="text-muted-foreground text-xs mb-4 text-left">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-1">
                                {
                                    project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>

                            <div className="flex justify-between items-center mt-3">
                         
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.links.live} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink />
                                    </a>
                                            
                                    <a 
                                        href={project.links.github} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github />
                                    </a>
                                </div>
                            
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>

        <div className="text-center mt-12">
            <a 
                href="https://www.github.com/Joshuakibwage"
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check My GitHub <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
