
import "./Home.css"
import pic from "../../assets/images/header.jpeg"
// import Levels from "../levels/Levels"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Levels from "../game/Game"
import { PLAYER_ONE, PLAYER_TWO } from "../../config/game.config"

const Home = (props) => {

    const [users, setUsers] = useState([])
    const [plyer, setPlyer] = useState('')



    useEffect(() => {
        const playerOne = window.localStorage.getItem(PLAYER_ONE)
        if (playerOne)
            setUsers(pervUsers => [...pervUsers, playerOne])

    }, [])


    const setToStorage = (e) => {
        e.preventDefault()
        if (users.length === 0)
            localStorage.setItem(PLAYER_ONE, plyer)
        else
            localStorage.setItem(PLAYER_TWO, plyer)
    }




    return (
        <section className="home">
            <h1>Welcome to the drawing game</h1>
            <img src={pic} />
            <form className="form">

                <h2>Please enter your name</h2>
                <input type="text" onChange={(e) => {
                    setPlyer(e.target.value);

                }}
                />

                <button className="home_button" onClick={setToStorage} > <Link to="/Game">Lest play</Link></button>

            </form>
        </section>
    )
}

export default Home