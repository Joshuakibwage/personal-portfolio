import React from 'react'
import { Code, User, Briefcase } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 mx-auto relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="font-semibold text-2xl text-primary">
                     Digital craftsman bringing ideas to life in the browser
                </h3>

                <p className="text-l">
                I thrive on crafting elegant solutions to complex challenges, blending creativity with precision to build seamless web experiences. 
                </p>

                <p>
                I’m driven by a love for solving complex problems through thoughtful, user-centered design. I build responsive interfaces that not only look great on every screen but also prioritize accessibility and performance. 
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>

                    <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4 text-left">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code 
                                className="w-6 h-6 text-primary"
                            />
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg">
                                Web Development
                            </h4>
                            <p className="">
                            High-performance web interfaces that deliver seamless experiences across every device.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="gradient-border p-6 card-hover text-left">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase
                                className="w-6 h-6 text-primary"
                            />
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg">
                                Project Management
                            </h4>
                            <p className="">
                            Leading projects from concept to launch with agility, precision, and purpose.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="gradient-border p-6 card-hover text-left">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User 
                                className="w-6 h-6 text-primary"
                            />
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg">
                                UI/UX Design
                            </h4>
                            <p className="">
                            Designing intuitive interfaces and crafting seamless, memorable user experiences.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe
