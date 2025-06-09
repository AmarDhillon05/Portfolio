import { useState, useEffect } from "react";

export default function Typed({ text, delay, classList }) {
    const [typed, setTyped] = useState("_");

    useEffect(() => {
        let currentText = text;
        let currentTyped = "_";

        function blinkCursor() {
            currentTyped = currentTyped.endsWith("_")
                ? currentTyped.slice(0, -1) + "\u00A0" 
                : currentTyped.slice(0, -1) + "_";

            setTyped(currentTyped);
            setTimeout(blinkCursor, 750);
        }

        function type() {
            if (currentText !== "") {
                currentTyped = currentTyped.slice(0, -1) + currentText[0] + "_";
                currentText = currentText.substring(1);
                setTyped(currentTyped);
                setTimeout(type, 20);
            } else {
                setTimeout(blinkCursor, 750);
            }
        }

        setTimeout(type, delay);
    }, [text, delay]);

    return (
        <div>
            <p className={classList}>{typed}</p>
        </div>
    );
}
