import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

function Loading(){
    //Defining the state
    const [done, setDone]=useState(false); 

    //API fetch call using asynchronous function.
    useEffect(()=>{
        setTimeout(()=>{
            const fetcheddata = async() =>{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                setDone(response);
                console.log(done);
              }
        fetcheddata();
        },2000);     
    },[]);

return(
    <div>
         {!done ? ( //"done" value is set to true to show the loading bars.
            <ReactLoading type={"bars"} color={"white"} />
         ) : (
            <h1>Sick of hello world</h1>//Your content will go here
         )}
      </div>
)
}

export default Loading;