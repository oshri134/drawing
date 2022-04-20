// import e from "express";
import { useEffect, useState } from "react";
import { PLAYER_TWO } from "../../../config/game.config";
import "./SecondPlayerGame.css"

const SecondPlayerGame = () => {
    const [guess, setGuess] = useState('')
    const secondPlayer = window.localStorage.getItem(PLAYER_TWO);
    const getImage = window.localStorage.getItem("img")
    const getScore = window.localStorage.getItem('point')
    const sendGuess = () => {
        window.localStorage.setItem('guess', guess)
    }


    return (
        <section className="second_player_game">
            <h1>Welcome {secondPlayer}</h1>
            <img src={getImage}></img>
            <input onChange={e => setGuess(e.target.value)} ></input>
            <button onClick={sendGuess}>Send the answer</button>
            <h2>Your point is : {getScore}</h2>
        </section>
    )
}
export default SecondPlayerGame