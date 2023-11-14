const list =document.querySelector(`#list`);
const addTodo =document.querySelector(`#add`)
const input =document.querySelector(`#input`)
let todos = [
    {
        id:1,
        text: `take out trash`,
        completed: true
    },
    {
        id:2,
        text:`Meeting with boss`,
        completed: false
    }
]
const handleRender =() => {
    list.innerHTML = `
${todos.map(todo => {
        return (`
    <li>
    <input type="checkbox" ${todo.completed ? `checked` : ``}/>
    <span>${todo.text}</span>
    </li>
    `
        )
    })

    }

`
}
handleRender();
addTodo.addEventListener(`click`,() =>{
    const newObj ={
        id:todos.length +1,
        text: input.value,
        completed:false
    }
    todos = [...todos,newObj];
    handleRender();
    input.value = '';
})