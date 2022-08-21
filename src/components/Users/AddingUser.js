import Card from "../UI/Card";
import classes from "./AddingUser.module.css";
import Button from "../UI/Button";

const Adduser = (props) => {
  const AddUserHandler = (event) => event.preventDefault();

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Adduser;
