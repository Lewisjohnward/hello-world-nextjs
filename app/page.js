'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import randomColor from 'randomcolor'
import greetings from './greetings.js'

export default function Home() {
    const [background, setBackground] = useState(randomColor())
    const [greeting, setGreeting] = useState(greetings[0])

    const handleMouseEnter = () => {
        setBackground(randomColor({luminosity: 'light'}))
    }
    const handleMouseExit = () => {
        const random = Math.floor(Math.random() * greetings.length)
        const greeting = greetings[random]
        console.log(greeting)
        setGreeting(greeting)
    }

    return (
            <main 
                className={styles.main}
                style={{backgroundColor: background}}
            >
                <div 
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseExit()}
                    className={styles.container}
                >
                    {greeting}
                </div>
            </main>
    )
}
