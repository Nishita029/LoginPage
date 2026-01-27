import '../styles/login.css'
function Login(){

    return(
        <div className="loginContainer">
            <h1>Login</h1>
            <div>
                <div>
                <label>Email: </label>
                <input type="email" placeholder='Enter email..' />
                </div>
                
                <div>
                <label>Password: </label>
                <input type="password" placeholder='Enter password ..' />
                </div>
            </div>
        </div>
    );
}

export default Login;