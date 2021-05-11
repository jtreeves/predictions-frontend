function FormSubmit(props) {
    return (
        <button 
            className={props.className}
            id={props.id}
            onClick={props.onClick}
            style={{ display: props.display }}
        >
            {props.text}
        </button>
    )
}

export default FormSubmit