
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
    const [level, setLevel] = useState(0)
    const [scoreGame, setScoreGame] = useState(0)
    const [showGame, setShowGame] = useState(false)
    const [showWaiting, setShowWaiting] = useState(false)
    const firstPlayer = window.localStorage.getItem('first_player');

    useEffect(() => {
        const secondPlayer = window.localStorage.getItem(PLAYER_TWO)
        if (secondPlayer !== null) {
            setInterval(() => {
                setShowGame(true)
                setShowWaiting(false)
            }, 5000)

        }


    }, []);

    const easy = () => {
        setShowWord(words.level_one[Math.floor(Math.random() * words.level_one.length)])
        setShowWaiting(true)
        setLevel(1)

    }
    const medium = () => {
        setShowWord(words.level_two[Math.floor(Math.random() * words.level_one.length)])
        setShowWaiting(true)
        setLevel(2)
    }
    const hard = () => {
        setShowWord(words.level_three[Math.floor(Math.random() * words.level_one.length)])
        setShowWaiting(true)
        setLevel(3)
    }
    const nextWord = () => {
        if (level === 1) {
            setShowWord(words.level_one[Math.floor(Math.random() * words.level_one.length)])
        }
        if (level === 2) {
            setShowWord(words.level_two[Math.floor(Math.random() * words.level_one.length)])
        }

        if (level === 3) {
            setShowWord(words.level_three[Math.floor(Math.random() * words.level_one.length)])
        }

    }
    const points = () => {


        if (level === 1) {
            const point = 1
            setScoreGame(scoreGame + point)
        }
        if (level === 2) {
            const point = 3
            setScoreGame(scoreGame + point)
        }
        if (level === 3) {
            const point = 5
            setScoreGame(scoreGame + point)
        }
        window.localStorage.setItem("point", scoreGame)
    }
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
                    <div className="button_word">
                        <button onClick={nextWord}>Next word</button>
                        <button onClick={points}>Good answer</button>
                    </div>
                    <h3>Point</h3>
                    <div className="point">
                        {scoreGame}
                    </div>
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