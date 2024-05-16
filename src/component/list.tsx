import './list.css'
let name=[{id:0,name:"Yoann"},{id:1,name:"Thomas"},{id:2,name:"Jeremy"},{id:3,name:"Aly"},{id:4,name:"Zarah"}];

const List=()=>{
    return (
        <div className="list">
            <ul>
                {name.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        </div>
    )
}

export default List;