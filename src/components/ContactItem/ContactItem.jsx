import css from './ContactItem.module.css'

const ContactItem = ({ id, name, number, onDeleteContact }) => {
    console.log(id);
    return (
        <li
            className={css.contact}
            key={id}>
        <p>
            {name}: <span>{number}</span>
        </p>
            <button
                type="button"
                onClick={() => onDeleteContact(id)}
                >Delete
            </button>
    </li>  
    )
}

export default ContactItem;