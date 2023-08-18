import './Slides.css'
import {createContext, useState} from 'react'
import { Body } from './Body'
import { Nav } from './Nav'
import { ButtonContextProvider } from './ButtonContext'
export const Slides = () => {
    return (<>
    <ButtonContextProvider>
        <div className="slides-card">
            <Body />
            <Nav />
        </div>
    </ButtonContextProvider>
    </>)
}