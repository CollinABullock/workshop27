import { useState } from "react";

export default function SignUpForm({setToken}) {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [valid, setValid] = useState(null)
  const apiurl = "https://fsa-jwt-practice.herokuapp.com/signup";
  console.log(userName);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username: userName, password: password}),
      });
      const result = await response.json();
      console.log(result.token);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
  <h1>Sign Up Or Die!</h1>
  {error && <p>{error}</p>}
  <form onSubmit={handleSubmit}>
    <label>Username:{""} <input value={userName} onChange={(e) => setUserName(e.target.value)} />
    {userName.length < 8 ? (
      <p>Your username is too short and you should be ashamed.  Please write a username that is at least 8 characters</p>
    ) : (
      <p>Username Is Appropriate.  Thank you for your service.</p>
    )}
    </label><br />
    {console.log(`My username is ${userName.length} characters`)}
    <label>Password:{""} <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/></label><br />
    <button>Submit, dear god please submit!</button>
  </form>
  </>
  )
}