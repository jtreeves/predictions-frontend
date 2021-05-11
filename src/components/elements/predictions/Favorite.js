import { useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Favorite(props) {
    const source = props.source
    const [favorite, setFavorite] = useState(props.favorite)
    const [changing, setChanging] = useState(false)

    const handleFavorite = (e) => {
        setFavorite(e.target.value)
    }

    const handleChanging = (e) => {
        e.preventDefault()
        setChanging(true)
    }

    const handleSubmitting = async (e) => {
        e.preventDefault()
        try {
            await axios.put(
                REACT_APP_SERVER_URL + 'predictions/' + source + '/favorite', 
                {favorite: favorite}
            )
            setChanging(false)
        } catch(error) {
            alert(error.response.data.msg)
        }
    }

    if (!changing) {
        if (favorite === '') {
            return (
                <article className="analysis">
                    <mark>Favorite</mark>

                    <p>You haven't chosen a favorite yet</p>

                    <button onClick={handleChanging}>
                        Choose Favorite
                    </button>
                </article>
            )
        } else {
            return (
                <article className="analysis">
                    <mark>Favorite</mark>

                    <p>{favorite}</p>

                    <button onClick={handleChanging}>
                        Change Favorite
                    </button>
                </article>
            )
        }
    } else {
        return (
            <article className="analysis">
                <mark>Favorite</mark>

                <form>
                    <label for="favorite">Select a graph:</label>

                    <select 
                        name="favorite" 
                        id="favorite" 
                        onChange={handleFavorite}
                    >
                        <option value=""></option>
                        <option value="linear">Linear</option>
                        <option value="quadratic">Quadratic</option>
                        <option value="cubic">Cubic</option>
                        <option value="hyperbolic">Hyperbolic</option>
                        <option value="exponential">Exponential</option>
                        <option value="logarithmic">Logarithmic</option>
                        <option value="logistic">Logistic</option>
                        <option value="sinusoidal">Sinusoidal</option>
                    </select>

                    <button onClick={handleSubmitting}>
                        Save Favorite
                    </button>
                </form>
            </article>
        )
    }
}

export default Favorite