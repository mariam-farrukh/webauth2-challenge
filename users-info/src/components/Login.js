import React, { useState } from "react";

import { Button, Input } from "semantic-ui-react";

export default function Login({ login, logout }) {
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

  const loginToAxios = e => {
    e.preventDefault();
    login(formData);
    setFormData({
      username: "",
      password: ""
    });
  };
  return (
    <div className="formContainer">
      <h2>Login</h2>
      <form onSubmit={e => loginToAxios(e)}>
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
          placeholder="Enter Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
        />
        <Button primary className="button">
          Submit
        </Button>
      </form>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}