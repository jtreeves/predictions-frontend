import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function AllSets(props) {
    const [predictions, setPredictions] = useState([])
    const [loading, setLoading] = useState(true)
    
    const getPredictions = async () => {
        try {
            const foundPredictions = await axios.get(REACT_APP_SERVER_URL + 'predictions/all/' + props.user.id)
            const allPredictions = foundPredictions.data.predictions
            const allRegressions = []
            for (const prediction of allPredictions) {
                const rawRegressions = await axios.get(
                    REACT_APP_SERVER_URL + 'api/' + prediction.source
                )
                allRegressions.push(rawRegressions.data.regressions)
            }
            const collatedData = []
            for (let i = 0; i < allPredictions.length; i++) {
                collatedData.push({
                    models: allRegressions[i],
                    opinions: allPredictions[i]
                })
            }
            const results = collatedData.map((datum, index) => {
                return (
                    <button 
                        key={index}
                    >
                        <Link
                            to={{
                                pathname: "/analysis",
                                state: {
                                    models: datum.models, 
                                    opinions: datum.opinions,
                                    user: props.user,
                                    stored: true
                                }
                            }}
                        >
                            {datum.models.title}
                        </Link>
                    </button>
                )
            })
            setPredictions(results)
        } catch(error) {
            setPredictions('')
        }
        setLoading(false)
    }

    useEffect(() => {
        getPredictions()
    })

    if (loading) {
        return (
            <section>
                LOADING!
            </section>
        )
    } else {
        return (
            <section>
                <h2>Models</h2>
                {predictions}
            </section>
        )
    }
}

export default AllSets