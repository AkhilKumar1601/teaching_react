import { useState } from "react";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Signup Successful");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />

          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Enter name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter email"
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <br />

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter password"
          />
        </div>

        <br />

        <button type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
