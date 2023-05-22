import { useState } from 'react';
import ContactList from "./ContactList";
import NameForm from "./NameForm";
export const App = () => {
  const [formData, setFormData] = useState({
        contacts: [],
        name: '',
        number: '',
    });
   
    function handleInputChange(event) {
        const { name, value } = event.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
   const [contact, setContact] = useState(null);
    function handleAddContact(event) {
        event.preventDefault();
        setContact(prev => {
            return {...prev, [formData.name]: formData.number }
        })
}
  return (
    <div>
      <h2>Phonebook</h2>
      <NameForm
        onChange={handleInputChange}
      onClick={handleAddContact} />
      <ContactList
      contacts={formData.contacts}
        name={formData.name}
        number={formData.number}/>
    </div>
  );
};
