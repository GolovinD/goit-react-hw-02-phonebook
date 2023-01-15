import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem'
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.contacts}>
            {contacts.map(({ id, name, number })  => (
                <ContactItem
                    key={id}     
                    name={name} 
                    number={number}
                    onDeleteContact={onDeleteContact}               
                />
            ))}
        </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf.isRequired,
  onDeleteContact: PropTypes.func,
};