import { useState } from "react";

export default function SignUpForm() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const apiurl = "https://fsa-jwt-practice.herokuapp.com/signup";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(apiurl, {
        method: "POST",
        body: JSON.stringify({userName, password})
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
  <h1>Sign Up Or Die!</h1>
  {error && <p>{error}</p>}
  <form onSubmit={handleSubmit}>
    <label>Username:{""} <input type="text" name="username" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} /></label><br />
    <label>Password:{""} <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/></label><br />
    <button type="submit">Submit, dear god please submit!</button>
  </form>
  </>
  )
}