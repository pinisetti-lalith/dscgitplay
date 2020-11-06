// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import useInputState from './useInputState';

// const TodoForm = ({ saveTodo }) => {
//   const { value, reset, onChange } = useInputState();

//   return (
//     <form
//       onSubmit={event => {
//         event.preventDefault();

//         saveTodo(value);
//         reset();
//       }}
//     >
//       <TextField
//         variant="outlined"
//         placeholder="Add todo"
//         margin="normal"
//         onChange={onChange}
//         value={value}
//       />
//     </form>
//   );
// };

// export default TodoForm;

import React,{useState}from "react";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
      }}
    >
      <TextField variant="outlined" placeholder="Add Todo" margin="normal" onChange={(event)=>{
        setValue(event.target.value)
      }}
      value={value} />
    </form>
  );
};

export default TodoForm;
