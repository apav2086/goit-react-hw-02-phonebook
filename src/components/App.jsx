import ContactList from "./ContactList";
import NameForm from "./NameForm";
export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <NameForm />
      <ContactList />
    </div>
  );
};
