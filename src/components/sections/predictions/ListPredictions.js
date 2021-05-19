import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GetPredictions from '../../../actions/predictions/GetPredictions'

function ListPredictions(props) {
    const user = props.user
    const id = user.id
    const [predictions, setPredictions] = useState([])
    const [loading, setLoading] = useState(true)
    
    const getPredictions = async () => {
        if (id) {
            try {
                const rawData = await GetPredictions(id)
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
                                            user: user,
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
        const loadingMessage = <p>
            LOADING!
        </p>

        return (
            <section>
                {loadingMessage}
            </section>
        )
    } else {
        const allPredictions = <ul>
            {predictions}
        </ul>

        return (
            <section>
                {allPredictions}
            </section>
        )
    }
}

export default ListPredictions