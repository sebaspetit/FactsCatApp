import { useState, useEffect } from "react"
//Custom Hook have to start "USE"
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    // para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return

        const threefirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threefirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])
    return { imageUrl }
}
// {imageUrl:}

