import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Save(props) {
    const source = props.source
    const sections = {
        favorite: {},
        note: {}
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.post(REACT_APP_SERVER_URL + 'predictions/' + props.user.id, { source, sections })
            alert('Models saved!')
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`SAVE PREDICTION ERROR: ${error}`)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Save