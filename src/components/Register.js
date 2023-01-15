import React from "react";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
  };

  const handleEmail = (event) => {
    console.log(event.target.value);
  };
  const handlePassword = (event) => {
    console.log(event.target.value);
  };
  return (
    <div
      style={{
        marginTop: "50px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleRegister}>
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <br />

        <input
          onBlur={handlePassword}
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
