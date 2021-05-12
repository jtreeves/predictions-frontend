import DisplayName from '../../elements/users/DisplayName'
import DisplayEmail from '../../elements/users/DisplayEmail'

function CoreInformation(props) {
    return (
        <section id="core-information">
            <DisplayName user={props.user} />
            <DisplayEmail user={props.user} />
        </section>
    )
}

export default CoreInformation