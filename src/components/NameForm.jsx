import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
export default function NameForm() {
    const [formData, setFormData] = useState({
        contacts: [],
        name: '',
        number: '',
    });
   
    function handleInputChange(event) {
        const { name, value } = event.currentTarget;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
  console.log(formData);

     
    const [contact, setContact] = useState(null);
    function handleAddContact(event) {
        event.preventDefault();
        setContact(<ContactList></ContactList>)
}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" onClick={handleAddContact}>Add contact</button>
        
        </form>
    
    
    </div>
);
}