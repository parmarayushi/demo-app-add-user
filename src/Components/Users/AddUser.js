import React, { useRef, useState } from "react";
import ErrorModel from "../ErrorModel/ErrorModel";
import Button from "./Button";

export default function AddUser(props) {
    const nameInputRef = useRef();
    const ageInputref = useRef();

    // const [userName, setUserName] = useState('');
    // const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputref.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid Username and age."
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Age must be greater than 0."
            });
            return;
        }

        props.onAdd(enteredName, enteredAge);
        // setUserName('');
        // setAge('');
        nameInputRef.current.value='';
        ageInputref.current.value='';   
    }

    // const userChangeHandler = (event) => {
    //     setUserName(event.target.value)
    // }

    // const ageChangeHandler = (event) => {
    //     setAge(event.target.value)
    // }

    const errorhandler = () => {
        setError(null);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorhandler} />}
            <h2>User Form</h2>
            <form className="border rounded p-3" onSubmit={addUserHandler}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Username</label>
                    <input type="text" className="form-control" id="userName" ref={nameInputRef} />
                    {/* value={userName} onChange={userChangeHandler} */}
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" ref={ageInputref} />
                    {/* value={age} onChange={ageChangeHandler}  */}
                </div>
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </form>
        </div>
    )
}