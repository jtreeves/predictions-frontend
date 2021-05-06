import { useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Favorite(props) {
    const source = props.source
    const [graph, setGraph] = useState(props.graph)
    const [changing, setChanging] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleGraph = (e) => {
        setGraph(e.target.value)
    }

    const handleChanging = (e) => {
        e.preventDefault()
        setChanging(true)
    }

    const handleSubmitting = async (e) => {
        e.preventDefault()
        try {
            await axios.put(REACT_APP_SERVER_URL + 'predictions/' + source + '/favorite', {favorite: graph})
            setSubmitting(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`FAVORITE ERROR: ${error}`)
        }
    }

    if (graph === '') {
        if (!changing) {
            return (
                <button onClick={handleChanging}>Choose Favorite</button>
            )
        } else {
            return (
                <form onSubmit={handleSubmitting}>
                    <label for="graph">Select a graph:</label>
                    <select name="graph" id="graph" onChange={handleGraph}>
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
                    <button type="submit">Save Favorite</button>
                </form>
            )
        }
    } else {
        if (!changing) {
            return (
                <section>
                    <p><mark>Favorite</mark> {graph}</p>
                    <button onClick={handleChanging}>Change Favorite</button>
                </section>
            )
        } else if (!submitting) {
            return (
                <form onSubmit={handleSubmitting}>
                    <label for="graph">Select a graph:</label>
                    <select name="graph" id="graph" onChange={handleGraph}>
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
                    <button type="submit">Save Favorite</button>
                </form>
            )
        } else {
            setChanging(false)
            setSubmitting(false)
        }
    }
}

export default Favorite