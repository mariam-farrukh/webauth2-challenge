import React from "react";
import { Button } from "semantic-ui-react";

export default function Users({ users, getUsers }) {
  return (
    <div className="usersContainer">
      <Button onClick={() => getUsers()} secondary>
        See Users
      </Button>
      {users.map(user => {
        return (
          <div>
            <p>{user.username}</p>
            <p>{user.password}</p>
          </div>
        );
      })}
    </div>
  );
}