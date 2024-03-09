export default function Todo ({task}) {
    return(
        <li>task:{task}</li>)
 
}

// conditional rendaring option-1
// export default function Todo ({task, isDone}) 
// {
//    if(isDone === true){
//     return <li>finished:{task}</li>
//    }
//    else{
//     return <li>work one: {task}</li>
//    }
// }

// // conditional rendaring option -2
// export default function Todo ({task, isDone}) 
// {
//    if(isDone){
//     return <li>finished:{task}</li>
//    }
//    else{
//     return <li>work one: {task}</li>
//    }
// }

// conditional rendaring option -3: Tarnary oparator
// export default function Todo ({task, isDone}) 
// {
//     return(
//         <li>{isDone ? 'finished:' 'work on'} : {task}</li>
//     )   
  
// }

