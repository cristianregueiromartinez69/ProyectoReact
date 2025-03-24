import React from 'react'

function login(props) {

    const user = {
        username: "Adrián",
        email: "adrian@email.com"
    }

    const handleClick = () => {
        props.handleLogin(user);
    }

  return (
    <section>
        <h2>login Section</h2>
        <button onClick={handleClick}>Login</button>
    </section>
  )
}

export default login