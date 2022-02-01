import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUSerName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUSerName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    } 
     if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUSerName("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="text"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
