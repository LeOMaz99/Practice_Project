import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={classes.users}>
      {props.users.map((user) => (
        <li>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};
export default UsersList;
