
import "./Game.css"
import Canvas from "../../components/Canvas"
import Users from "../../components/Users"
import Home from "../home/Home"
import words from "../../data/words.json"
import { useEffect, useState } from "react"
import waiting from "../../assets/images/waiting.mp4"
import ReactPlayer from 'react-player'
import { PLAYER_TWO } from "../../config/game.config"

const Levels = (props) => {
    const [showWord, setShowWord] = useState()
    const [showGame, setShowGame] = useState(false)
    const [showWaiting, setShowWaiting] = useState(false)
    const firstPlayer = window.localStorage.getItem('first_player');

    useEffect(() => {
        const secondPlayer = window.localStorage.getItem(PLAYER_TWO)
        // if (secondPlayer !== mull) {

        // }

    });
    console.log()
    const easy = () => {
        setShowWord(words.level_one[Math.floor(Math.random() * words.level_one.length)])
        setShowWaiting(true)

    }
    const medium = () => {
        setShowWord(words.level_two[Math.floor(Math.random() * words.level_one.length)])
        setShowWaiting(true)
    }
    const hard = () => {
        setShowWord(words.level_three[Math.floor(Math.random() * words.level_one.length)])
        setShowWaiting(true)
    }
    console.log(words.level_one)
    return (
        <section className="page_game">
            <h1>Welcome {firstPlayer}</h1>
            <h1>Please select the level of play  </h1>

            <div className="levels">
                <h3>Easy: 3-4 letters</h3>
                <h3>Medium: 5 letters</h3>
                <h3>Hard: 6 or more letters</h3>
            </div>

            <div>

                <button className="home_button" onClick={easy}>Easy</button>
                <button className="home_button" onClick={medium}>Medium</button>
                <button className="home_button" onClick={hard} >Hard</button>
                <hr />
                <br />

            </div>
            {showWaiting && (
                <div className="waiting">
                    <h1>Waiting for the second player</h1>
                    <ReactPlayer
                        className='react-player fixed-bottom'
                        url={waiting}
                        width='100%'
                        height='100%'
                        loop={true}
                        playing={true}

                    />
                </div>
            )
            }
            {showGame && (<div className="game">

                <div className="words">
                    <h1>Words</h1>
                    <h3> {showWord}</h3>

                </div>
                <div className="canvas">
                    <Canvas />
                </div>
                <div className="users">
                    <Users />
                </div>
            </div>)

            }
        </section>
    )
}
export default Levels