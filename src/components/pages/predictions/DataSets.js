import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CheckExpiration from '../../utilities/users/CheckExpiration'
import '../../../style/predictions/data.css'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DataSets(props) {
    CheckExpiration(props.user.exp, props.handleLogout)

    const [predictions, setPredictions] = useState([])
    const [loading, setLoading] = useState(true)
    
    const getPredictions = async () => {
        if (props.user.id) {
            try {
                const foundPredictions = await axios.get(
                    REACT_APP_SERVER_URL + 'predictions/all/' + props.user.id
                )
                const allPredictions = foundPredictions.data.predictions
                const allRegressions = []
                for (const prediction of allPredictions) {
                    if (prediction.source) {
                        const rawRegressions = await axios.get(
                            REACT_APP_SERVER_URL + 'api/' + prediction.source
                        )
                        allRegressions.push(
                            rawRegressions.data.regressions
                        )
                    }
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
                        <li
                            key={index}
                        >
                            <Link
                                to={{
                                    pathname: "/analysis",
                                    state: {
                                        models: datum.models, 
                                        opinions: datum.opinions,
                                        user: props.user,
                                        initiated: true,
                                        stored: true
                                    }
                                }}
                                style={{ textDecoration: 'none' }} 
                            >
                                <button>
                                    {datum.models.title}
                                </button>
                            </Link>
                        </li>
                    )
                })
                setPredictions(results)
            } catch (error) {
                setPredictions('')
                console.log(error)
            }
        }
        setLoading(false)
    }

    useEffect(() => {
        getPredictions()
    })

    if (loading) {
        return (
            <main className="data">
                LOADING!
            </main>
        )
    } else {
        return (
            <main className="data">
                <h1>Models</h1>

                <ul>
                    {predictions}
                </ul>
            </main>
        )
    }
}

export default DataSets