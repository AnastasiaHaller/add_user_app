import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import styles from './CreateUser.module.css';

import React, { useState } from "react";


const CreateUser = (props) => {

    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [error, setError] = useState();

    const createUserHandler = (e) => {
        e.preventDefault();

        if (inputName.trim().lengthlenght === 0 || inputAge.trim().length === 0) {
            setError({
                title: 'Incorrect input',
                message: 'These fields cannot be empty'
            });
            return;
        }

        if (+inputAge <1) {
            setError({
                title: 'Incorrect age',
                message: 'Age must be greater than 0'
            });
            return;
        }

        props.onCreateUser(inputName, inputAge);

        setInputName('');
        setInputAge('');
    };

    const errorHandler = () => {
        setError(false);
    };
    
    return (

        <div>
            {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}

            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                
                <label htmlFor='name'>Name:</label>
                <input type="text"
                    id='name'
                    value={inputName}
                    onChange={(e) => {setInputName(e.target.value);}} />
                <label htmlFor='age'>Age:</label>
                <input type="number"
                    id='age'
                    value={inputAge}
                    onChange={(e) => {setInputAge(e.target.value);}} />
                <Button type="submit">Add User</Button>

                </form>
            </Card>

        </div>
    )

};

export default CreateUser;