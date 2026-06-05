import { useState } from "react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>Password Toggle</h1>

      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      <button onClick={togglePassword}> {showPassword ? "Hide" : "Show"} Password </button>
    </div>
  );
}

export default PasswordToggle;
