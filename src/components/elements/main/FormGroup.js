// Create function
function FormGroup(props) {
    return (
        <section>
            <label htmlFor={props.label} title={props.tooltip}>{props.display}</label>
            <input
                type={props.type}
                name={props.label}
                value={props.value}
                onChange={props.onChange}
            />
        </section>
    )
}

// Export function
export default FormGroup