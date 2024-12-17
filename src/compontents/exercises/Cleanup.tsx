import {useEffect, useState} from "react";

const Cleanup =()=>{


    const [number, setNumber] = useState(0);

    useEffect(()=>{

        const interval = setInterval(()=>{

            setNumber(prev => prev +1)

        }, 1000)

        //cleanup function
        return ()=>{
            clearInterval(interval)
            console.log("cleanup runs")
        }


    }, [number])

    return <div>

        <h3>Cleanup</h3>
        <h1>{number}</h1>

    </div>
}

export default Cleanup