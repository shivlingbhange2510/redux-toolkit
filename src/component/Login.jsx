import React from 'react'

const Login = () => {
    return (
        <div>
            <label className="username ">Enter :</label>
            <input type='text' placeholder='enter...' id='username' />
            <br />
            <label > Enter</label>
            <input
                type='text' placeholder='enter...' id='username' />
            <br />
            <button>submit</button>
        </div>
    )
}

export default Login