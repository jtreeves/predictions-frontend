function FormItem(props) {
    if (props.type !== 'textarea') {
        return (
            <article>
                <label htmlFor={props.label} title={props.tooltip}>{props.display}</label>
                <input
                    type={props.type}
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </article>
        )
    } else {
        return (
            <article>
                <label htmlFor={props.label} title={props.tooltip}>{props.display}</label>
                <textarea
                    cols="30" 
                    rows="10"
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </article>
        )
    }
}

export default FormItem