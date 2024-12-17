import {useState, useRef} from "react";


const INIT_VALUE = {
    username: "",
    password: "",
}

export default function LoginForm() {

    //beispiel mit onChange
    const [credentials, setCredentials] = useState(INIT_VALUE)

    function handleChange(event) {

        console.log("changed", event.target.name, event.target.value)
        setCredentials({...credentials, [event.target.name]: event.target.value})

    }


    //beispiel mit useRef

    const passwordRef = useRef<HTMLInputElement | null>(null);
    const usernameRef = useRef<HTMLInputElement | null>(null);

    function handleSubmit(e) {
        e.preventDefault();

        const dataToSubmit ={
            username: usernameRef.current?.value,
            password: passwordRef.current?.value,
        }

        console.log("submit data", dataToSubmit)
    }

    console.log("credentials", credentials)
    return <div>
        <h3>Login</h3>
        <form>
            <label htmlFor="username">Username</label><br/>
            <input type={ "text" } name={ "username" } id={ "username" } ref={ usernameRef }/><br/>
            <label htmlFor={ "password" }>Password</label><br/>
            <input type={ "text" } name={ "password" } id={ "password" } ref={ passwordRef }/><br/>
            <button onClick={ handleSubmit }>Login</button>
        </form>
    </div>
}