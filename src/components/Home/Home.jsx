import React from 'react'
import ContactUs from '../Contact Us/ContactUs'
import Team from '../Our Team/Team'
import Hero from '../Hero/Hero'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
function Home() {
    return (
        <>
        <Flowbite>
            <Hero/>
            <hr class="border-white "></hr>
            <Team/>
            <ContactUs/>
            </Flowbite>
        </>
    )
}

export default Home
