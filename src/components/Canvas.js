
import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const Canvas = () => {
    const [sendImg, setSendImg] = useState(null)
    const canvasRef = useRef(null);
    console.log(canvasRef)


    const clears = () => {
        canvasRef.current.clear()
    }
    const backDraw = () => {
        canvasRef.current.undo()

    }
    const sendImage = () => {
        setSendImg(canvasRef.current.getDataURL())
        window.localStorage.setItem("img", sendImg)
    }

    return (
        <section>

            <CanvasDraw
                ref={canvasRef}
                brushRadius={2} />
            <button onClick={clears}>Clear All</button>
            <button onClick={backDraw}>Back</button>
            <button onClick={sendImage}>Send to user</button>
        </section>
    )
}
export default Canvas