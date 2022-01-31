import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header/Header";
import CreateProfile from "./components/create/CreateProfile";
import Contacts from "./components/contacts/Contacts";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <CreateProfile addContactHandler={addContactHandler} />
      <Contacts contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
