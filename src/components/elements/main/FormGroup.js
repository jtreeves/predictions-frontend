import { useState } from 'react'

// Create function
function FormGroup(props) {
    const [tooltip, setTooltip] = useState(false)

    return (
        <div>
            <label htmlFor={props.label}>{props.display}</label>
            <input
                type={props.type}
                name={props.label}
                value={props.value}
                onChange={props.onChange}
                onMouseEnter={() => setTooltip(true)}
                onMouseLeave={() => setTooltip(false)}
            />
            {tooltip && (
                <p>{props.tooltip}</p>
            )}
        </div>
    )
}

// Export function
export default FormGroup