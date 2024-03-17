import React from 'react'
import { Flowbite } from 'flowbite-react';
import { NavLink } from 'react-router-dom'

function Hero() {
    return (<>
            <section class="bg-white dark:bg-gray-900 h-screen ">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1
                            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Welcome to CodeCommune</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            CodeCommune Gamifies your Coding Experience and Helps you to learn in more Engaging way.</p>
                        
                        <NavLink to='#' className= "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-2">Ask Your Doubts</NavLink>
                        <NavLink to="/learn" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Learn a Language
                        </NavLink>
                        
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://imgs.search.brave.com/NLY5ahPDicxainMGkLFopzH0irOrchxl9YiVfpDYgzs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92ZWN0/YS5pby9ibG9nL3Jl/c3BvbnNpdmUtaW1h/Z2VzLXdpdGgtc3Zn/LXZzLXNyY3NldC9z/cmNzZXQtd29ya2Zs/b3cuYTg3YjNiNDU4/ZC5zdmc.svg"
                            alt="mockup" />
                    </div>
                </div>
            </section>
            </>
    )
}

export default Hero
