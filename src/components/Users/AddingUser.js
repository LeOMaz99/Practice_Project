import Card from "../UI/Card";
import classes from "./AddingUser.module.css";

const Adduser = (props) => {
  const AddUserHandler = (event) => event.preventDefault();

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default Adduser;
