import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddingUser.module.css";
import Button from "../UI/Button";

const Adduser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };
  const usernameChangeHandler = function (event) {
    setenteredUsername(event.target.value);
  };
  const ageChangeHandler = function (event) {
    setenteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Adduser;
