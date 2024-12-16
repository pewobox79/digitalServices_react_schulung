import {ReactElement, ReactNode, useState} from 'react';
import styles from '../../styles/Button.module.css';

type ButtonType = {

    label?: string;
    action: ()=>void;
    children?: ReactElement | ReactElement[] | ReactNode
}

const Button =({label, action, children}:ButtonType)=>{

    const [clicked,setClicked] = useState(false);

    function handleClick(){
        setClicked(!clicked)
        console.log("inner function", clicked)
    }

    console.log("clicked outer", label,clicked)

    return <>
        <div className={styles.btn} onClick={handleClick}>{label ? label : children}</div>
        <p style={{color: clicked ? "red": "black", fontWeight: clicked ? "bold" : "normal"}}>hallo aus Button</p>
    </>
}

export default Button