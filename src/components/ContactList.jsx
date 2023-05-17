export default function ContactList(props) {
    const contacts = [{ name: " ", id: " " }];
    console.log(contacts);
    return (
        <div>
            <h2>Contacts</h2>
            <ul>

            </ul>
            {props.children}
        </div>
    );
}