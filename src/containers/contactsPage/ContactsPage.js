import React, { useState, useEffect } from "react";
import { TileList } from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;
  // Keep track of local state values
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  //Duplicate
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!duplicate) {
      addContact(name, phone, email);
      //reset values
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    let verifyDup = contacts.map(contact => contact.name).indexOf(name);
      if (verifyDup !== -1) {
        setDuplicate(true);
      }
      return;
    }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
         />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
         arr={props.contacts}/>
      </section>
    </div>
  );
};
