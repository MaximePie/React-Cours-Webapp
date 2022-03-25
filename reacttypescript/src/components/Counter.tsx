import {useState} from "react";

export default function Counter() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <h4>Coucou les counter</h4>
            <p>Counter : {counter}</p>
            <button onClick={() => increaseCounter("low")}>Augmenter un peu</button>
            <button onClick={() => increaseCounter("high")}>Augmenter beaucoup</button>
        </div>
    )

    /**
     * Augmenter la valeur du counter avec la valeur générée aléatoirement
     * Si le paramètre est "low", on augmente de peu
     * Sinon, si c'est "high" on augmente de beaucoup
     */
    function increaseCounter(increaseSize: "low" | "high") {
        console.log(increaseSize);

        const minimumValue: number = increaseSize === "low" ? 1 : 10;
        const maximumValue: number = increaseSize === "low" ? 2 : 20;

        const income: number = randomNumber(minimumValue, maximumValue);
        setCounter(counter + income)
    }

    /**
     * Génère un nombre aléatoire compris entre le max et le min
     * @param minimumBorder - Number, c'est la borne inférieure
     * @param maximumBorder - Number, c'est la borne supérieure
     * @return number, le résultat de la fonction
     */
    function randomNumber(minimumBorder: number, maximumBorder: number): number {
        return Math.round(Math.random() * (maximumBorder - minimumBorder) + minimumBorder);
    }

}