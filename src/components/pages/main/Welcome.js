import '../../../style/main/welcome.css'

import { useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Welcome() {
    const [input, setInput] = useState(0)

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const throwPractice = async (e) => {
        e.preventDefault()
        const number = parseInt(input)
        try {
            const receivedMessage = await axios.post(
                REACT_APP_SERVER_URL + 'throw',
                {number}
            )
            console.log('SUCCESS: ', receivedMessage.data.msg)
        } catch (error) {
            console.log('FAILURE: ', error.response.data.msg)
        }
    }
    return (
        <main className="welcome">
            <h1>Welcome</h1>
            <p>Use our site to get regression models for any data set you enter.</p>
            <label for="number">
                Choose a number:
            </label>

            <select 
                name="number" 
                id="number" 
                onChange={handleInput}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="one">one</option>
                <option value="two">two</option>
            </select>

            <button onClick={throwPractice}>
                Throw Practice
            </button>
        </main>
    )
}

export default Welcome