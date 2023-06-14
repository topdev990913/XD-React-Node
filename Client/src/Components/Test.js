import { useState, useEffect } from "react";


const Test = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);
    return <h1 style={{color: "white"}}>I have rendered {count} times!</h1>;

}
export default Test;