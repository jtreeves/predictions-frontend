import { useState, useEffect } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function AllModels(props) {
    const [models, setModels] = useState([])
    
    async function getModels() {
        try {
            const foundPredictions = await axios.get(REACT_APP_SERVER_URL + 'predictions/all/' + props.user.id)
            const sources = foundPredictions.data.predictions
            const titles = []
            for (const source of sources) {
                const fullModels = await axios.get(REACT_APP_SERVER_URL + 'api', source.source)
                titles.push(fullModels.data.regressions.title)
            }
            setModels(titles)
        } catch(error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getModels()
    }, [])

    return (
        <div>
            {models}
        </div>
    )
}

export default AllModels