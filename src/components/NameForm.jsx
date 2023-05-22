
export default function NameForm({
    onChange,
    onClick
}) {   
return (
    <div>
        <p>Name</p>
        <form>
            <div className="inputContainer">
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                    required
                    onChange={onChange}
                />
            </div>
            <div className="inputContainer">
                <p>Number</p>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={onChange}
                />
            </div>
            <button onClick={onClick}>Add contact</button>
        
        </form>
 
    </div>
);
}