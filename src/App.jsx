import './App.css'
import { useCatImage } from "./services/hooks/useCatImage"
import { useCatFact } from './services/hooks/useCatFact'

const CAT_ENDPOINT_RAMDON_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const { fact, getRandomFactAndUpdate } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        getRandomFactAndUpdate()
    }
    return (
        <main className="Main">
            <h1>Cats App</h1>

            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
                alt={`Imagine extracted using the first three words for ${fact}`} />}
        </main>
    )
}
