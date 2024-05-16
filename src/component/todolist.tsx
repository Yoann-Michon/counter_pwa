import { useState } from "react";

const tasks=[{id:0,desc:"faire ci"},{id:1,desc:"faire ca"},{id:2,desc:"ceci"},{id:3,desc:"cela"}]

const TodoList=()=>{
    const [value, setValue] = useState("");

    return (
        <>

        <form>
            <label htmlFor="nom">Nom :</label>
            <input type="text" name="nom" id="task" onChange={e=>setValue(e.target.value)} value={value}/>
            <button type="submit"> ajouter</button>
        </form>
            <ul>
                {tasks.map(task => <li key={task.id}>{task.desc}<div className="div_btn">
                    <button>{}</button>
                    <button>{}</button>
                    </div></li>)}
            </ul>
        </>
    )
}

export default TodoList;