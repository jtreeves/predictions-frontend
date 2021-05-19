import { useState } from 'react'
import UpdateFavorite from '../../../actions/predictions/UpdateFavorite'
import FormButton from '../../buttons/main/FormButton'

function FavoriteModel(props) {
    const source = props.source
    const favorite = props.favorite
    const setFavorite = props.setFavorite
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
        if (source) {
            try {
                await UpdateFavorite(source, favorite)
                setChanging(false)
            } catch (error) {
                alert('Your favorite was not set')
                setChanging(false)
                console.log(error)
            }
        }
    }

    if (!changing) {
        if (favorite === '') {
            return (
                <form className="analysis">
                    <h3>Favorite</h3>

                    <p>You haven't chosen a favorite yet</p>

                    <FormButton 
                        text="Choose Favorite"
                        onClick={handleChanging}
                        id="choose-favorite-button"
                        display="block"
                    />
                </form>
            )
        } else {
            return (
                <form className="analysis">
                    <h3>Favorite</h3>

                    <p>{favorite}</p>

                    <FormButton 
                        text="Change Favorite"
                        onClick={handleChanging}
                        id="change-favorite-button"
                        display="block"
                    />
                </form>
            )
        }
    } else {
        return (
            <form className="analysis">
                <h3>Favorite</h3>

                <p>
                    <label for="favorite">
                        Select a graph:
                    </label>

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
                </p>

                <FormButton 
                    text="Save Favorite"
                    onClick={handleSubmitting}
                    id="save-favorite-button"
                    display="block"
                />
            </form>
        )
    }
}

export default FavoriteModel