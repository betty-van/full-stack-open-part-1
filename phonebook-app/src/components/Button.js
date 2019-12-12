import React from 'react'
import personsService from '../services/persons'

const Button = ({person, setPersons, persons}) => {
    const handleClick = () => {
        const result = window.confirm(`Are you sure you want to delete ${person.name}?`)
        console.log(result)

        if (result === true) {
            personsService
                .remove(person.id)
                .then(response => {
                    console.log(`${person.name}`, response)
                })
                .then(() => {
                    const result = persons.filter(p => p.name !== person.name)
                    setPersons(result)
                })  
        }
    }


    return (
        <button onClick={handleClick}>
           delete
        </button>
    )
}
export default Button