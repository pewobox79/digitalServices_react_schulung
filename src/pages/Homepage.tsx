import styles from '../styles/Homepage.module.css'
import Button from "../compontents/globals/Button.tsx";
import EffectExercise from "../compontents/exercises/EffectExercise.tsx";
const Homepage = () => {

    console.log("homepage styles", styles)
    return <>
        <h1 className={`${styles.heading} ${styles.greenColor}`}>homepage</h1>
        <p className={styles.paragraph}>Willkommen</p>
        <Button label="button1" action={()=> console.log("hallo")}/>
        <Button label="button2" action={()=>alert("hallo")}/>
        <Button label="button3" action={()=>console.log("logged out")}/>

    </>

}

export default Homepage