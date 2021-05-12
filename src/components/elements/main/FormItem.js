function FormItem(props) {
    const label = <label 
        htmlFor={props.label} 
        title={props.tooltip}
    >
        {props.display}
    </label>

    if (props.type !== 'textarea') {
        return (
            <p>
                {label}
                <input
                    type={props.type}
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </p>
        )
    } else {
        return (
            <p>
                {label}
                <textarea
                    cols="30" 
                    rows="10"
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </p>
        )
    }
}

export default FormItem