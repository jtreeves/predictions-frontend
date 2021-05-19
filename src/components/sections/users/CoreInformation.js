import DisplayName from '../../elements/users/DisplayName'
import DisplayEmail from '../../elements/users/DisplayEmail'

function CoreInformation(props) {
    return (
        <section id="core-information">
            <DisplayName 
                id={props.id}
                name={props.name}
                setName={props.setName}
            />

            <DisplayEmail 
                id={props.id}
                email={props.email}
                setEmail={props.setEmail}
            />
        </section>
    )
}

export default CoreInformation