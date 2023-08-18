import './Nav.css'
import { useContext } from 'react'
import { ButtonContext } from './ButtonContext'
export const Nav = () => {
    const {active, setActive} = useContext(ButtonContext)
    return (<>
    <nav className="nav">
        <ul>
            <li><button className={active == 0?'btn-active':'btn'} onClick={()=>{setActive(0)}}>App</button></li>
            <li><button className={active == 1?'btn-active':'btn'} onClick={()=>{setActive(1)}}>Downloads</button></li>
            <li><button className={active == 2?'btn-active':'btn'} onClick={()=>{setActive(2)}}>Reviews</button></li>
        </ul>
    </nav>
    </>)
}