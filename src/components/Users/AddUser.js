import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredNameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value;

    if (
      enteredNameRef.trim().length === 0 ||
      enteredAgeRef.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name an age (Non-empty).",
      });
      return;
    }
    if (+enteredAgeRef < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (Non-Negative).",
      });
      return;
    }
    props.onAddUser(enteredNameRef, enteredAgeRef);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="text" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
