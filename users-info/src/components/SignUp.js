import React, { useState } from "react";

import { Button, Input } from "semantic-ui-react";

export default function SignUp({ addUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addUserToAxios = e => {
    e.preventDefault();
    addUser(formData);
    setFormData({
      username: "",
      password: ""
    });
  };
  return (
    <div className="formContainer">
      <h2>Sign Up</h2>
      <form onSubmit={e => addUserToAxios(e)}>
        <Input
          className="input"
          focus
          placeholder="Enter Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={changeHandler}
        />
        <Input
          focus
          placeholder="Enter password"
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
        />
        <Button primary className="button">
          Submit
        </Button>
      </form>
    </div>
  );
}