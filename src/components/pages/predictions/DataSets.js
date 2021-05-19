import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GetPredictions from '../../../actions/predictions/GetPredictions'
import CheckExpiration from '../../../utilities/users/CheckExpiration'
import '../../../style/predictions/Data.css'

function DataSets(props) {
    CheckExpiration(props.user.exp, props.handleLogout)

    const [predictions, setPredictions] = useState([])
    const [loading, setLoading] = useState(true)
    
    const getPredictions = async () => {
        if (props.user.id) {
            try {
                const rawData = await GetPredictions(props.user.id)
                const results = rawData.data.collections.map(
                    (collection, index) => {
                        return (
                            <li
                                key={index}
                            >
                                <Link
                                    to={{
                                        pathname: "/analysis",
                                        state: {
                                            models: collection.regression, 
                                            opinions: collection.prediction,
                                            user: props.user,
                                            initiated: true,
                                            stored: true
                                        }
                                    }}
                                    style={{ textDecoration: 'none' }} 
                                >
                                    <button>
                                        {collection.regression.title}
                                    </button>
                                </Link>
                            </li>
                        )
                    }
                )
                setPredictions(results.reverse())
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