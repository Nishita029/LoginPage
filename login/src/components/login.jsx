import '../styles/login.css'
function Login(){

    return(
        <div className="loginContainer">
            <h1>Login</h1>
            <div>
                <div className='loginLabel'>
                    <label>Email: </label>
                </div>
                <div>
                    <input className='inputField' type="email" placeholder='Enter email..' />
                </div>
                <div className='loginLabel'>
                    <label>Password: </label>
                </div>
                <div>
                    <input className='inputField' type="password" placeholder='Enter password ..' />
                </div>

                <div className='button-container'>
                <button className='button'>signIn</button>
                <button className='button'>signUp</button>
                </div>

            </div>
        </div>
    );
}

export default Login;