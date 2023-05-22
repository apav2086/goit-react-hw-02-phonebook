export default function ContactList({
    contacts,
    name,
    number
}) {
    return (
            <div>
            <h2>Contacts</h2>
            <ul>
                <li></li>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {name} : {number}
                    </li>
                ))}

            </ul>
            
    
    </div>
    
);
}