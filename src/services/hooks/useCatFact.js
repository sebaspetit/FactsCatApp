import { useState, useEffect } from "react"
import { getRandomFact } from "../facts"

//Custom Hook have to start "USE"
export function useCatFact() {
    const [fact, setFact] = useState()

    const getRandomFactAndUpdate = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    // para recuperar la cita al cargar la pagina
    useEffect(getRandomFactAndUpdate, [])
    return { fact, getRandomFactAndUpdate }
}