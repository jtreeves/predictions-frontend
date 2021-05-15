import DisplayName from '../../elements/users/DisplayName'
import DisplayEmail from '../../elements/users/DisplayEmail'

function CoreInformation(props) {
    return (
        <section id="core-information">
            <DisplayName name={props.name} />
            <DisplayEmail email={props.email} />
        </section>
    )
}

export default CoreInformation