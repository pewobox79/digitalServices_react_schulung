import {useEffect, useState} from "react";

const EffectExercise =()=>{

    const [user, setUser] = useState(1);
    const [selected, setSelected] = useState();

    useEffect(()=>{

        const controller = new AbortController();
        const signal = controller.signal

        fetch(`https://jsonplaceholder.typicode.com/users/${user}`,{signal: signal})
            .then(response => response.json())
            .then(data => setSelected(data))

        //cleanup fetch request
        return ()=> {
            console.log("cleanup runs")
            controller.abort();
        }

    }, [user])

    return <div>

        <div onClick={ () => setUser(1) }
             style={ {backgroundColor: "blue", color: "white", borderRadius: 10, padding: 20, margin: 10} }>user 1
        </div>

        <div onClick={ () => setUser(2) }
             style={ {backgroundColor: "blue", color: "white", borderRadius: 10, padding: 20, margin: 10} }>user 2
        </div>

        <div onClick={ () => setUser(3) }
             style={ {backgroundColor: "blue", color: "white", borderRadius: 10, padding: 20, margin: 10} }>user 3
        </div>

        <div onClick={ () => setUser(4) }
             style={ {backgroundColor: "blue", color: "white", borderRadius: 10, padding: 20, margin: 10} }>user 4
        </div>




        { selected && <div><h4>{ selected.name }</h4><p>{ selected.phone }</p></div> }



    </div>
}

export default EffectExercise