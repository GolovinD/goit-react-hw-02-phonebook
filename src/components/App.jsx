import React from 'react'
import { nanoid } from 'nanoid'

import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'

import Section from './Section/Section'

class App extends React.Component {

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }
  
  addContacts = ({ name, number }) => {
    
    const newContact = {
      id: nanoid(),
      name,
      number,
      
    };
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      
    }));
  }

  findContact =  filter => {
    // console.log(filter)
    this.setState(prevState => ({
      filter: filter,
    }));
  }

  getWantedContacts = () => {
    const { contacts, filter } = this.state;
    console.log(filter);

    const standarValue = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(standarValue)
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
  const wantedContacts = this.getWantedContacts();

   return (
    <div>
      <Section title="Phonebook" >     
        <ContactForm
          onSubmit={this.addContacts}
         />
      </Section>
      
       <Section title="Contact" >
         <Filter onFilter={this.findContact}    
         />
         <ContactList
          contacts={wantedContacts}
          onDeleteContact={this.deleteContacts}
         />
       </Section>
    </div>
    );
  }
};

export default App;






