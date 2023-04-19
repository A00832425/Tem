import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
    return(
        <div className>
            <form aciton="">
                <div>
                    <label htmlFor="name">Email</label>
                    <input type="text" placeholder='Enter Something'/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login