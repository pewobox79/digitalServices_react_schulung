import {topics} from "../../store/impressumStore.ts";
import TopicItem from "./components/TopicItem.tsx";
import {useEffect, useState} from "react";

const TopicsOverview =()=>{

    const [posts, setPosts] = useState([]);



    useEffect(()=>{
        console.log("effect runs");

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(data => setPosts(data))


    },[])



    // create a list of topic items => map returned new Array
    const TopicsList = posts.map((post)=>{

        return <TopicItem key={post.id} title={post.title} body={post.body}/>

    })


    return <>{TopicsList}</>
}

export default TopicsOverview