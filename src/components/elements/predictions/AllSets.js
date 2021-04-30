import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function AllSets(props) {
    const [models, setModels] = useState([])
    
    const getModels = async () => {
        try {
            const foundPredictions = await axios.get(REACT_APP_SERVER_URL + 'predictions/all/' + props.user.id)
            const sources = foundPredictions.data.predictions
            const modelsData = []
            for (const source of sources) {
                const fullModels = await axios.get(REACT_APP_SERVER_URL + 'api/' + source.source)
                modelsData.push(fullModels.data.regressions)
            }
            const modelsArray = modelsData.map((modelsSet, index) => {
                return (
                    <div 
                        key={index}
                    >
                        <Link
                            to={{
                                pathname: "/analysis",
                                state: {
                                    models: modelsSet, 
                                    user: props.user,
                                    stored: true
                                }
                            }}
                        >
                            {modelsSet.title}
                        </Link>
                    </div>
                )
            })
            setModels(modelsArray)
        } catch(error) {
            setModels('')
        }
    }

    useEffect(() => {
        getModels()
    })

    return (
        <div>
            {models}
        </div>
    )
}

export default AllSets