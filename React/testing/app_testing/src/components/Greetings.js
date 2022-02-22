import { useState } from "react";

const Greeting = () => {
    const [changedText, setChengedText] = useState(false);

    const changeTextHandler = () => {
        setChengedText(true);
    };
    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText &&<p>It's good to practice testing.</p>}
            {changedText && <p>Changed!!</p>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting;