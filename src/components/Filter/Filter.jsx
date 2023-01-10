import React from 'react';

import css from './Filter.module.css'

class Filter extends React.Component {
    state = {
        filter: '',
    }

    handleNameChange = event => {
        const { name, value } = event.currentTarget
        console.log(value);
        this.setState({ [name]: value });
        
        this.props.onFilter(value)
    }
    

    handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  } 


    render() {

        return (

            <div>
                <label
                    className={css.label}
                >
                    <span
                        className={css.labelName}
                    >Find contacts by name</span>
                    
                    <input
                        className={css.input}
                        type="text"
                        value={this.state.filter}
                        onChange={this.handleNameChange}
                        name="filter"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required                        
                    />
                </label>

            </div>
        )
    }
}


export default Filter;