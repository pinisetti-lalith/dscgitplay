import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';
import Header from './Header';
import  {Container,Paper} from "@material-ui/core"
import UserItem from './UserItems';




const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  
  return (
    <div className="App">
      <Header sections={[{title:"Home",url:"/"},{title:"About",url:"/"}]}/>
      <Container xs={12}>
        <Paper elevation={5}>
          <Typography component="h1" variant="h2">
            Todos
          </Typography>
          <TodoForm
            saveTodo={(todoText) => {
              const trimmedText = todoText.trim();

              if (trimmedText.length > 0) {
                addTodo(trimmedText);
              }
            }}
          />

          <TodoList todos={todos} deleteTodo={deleteTodo} />

          <UserItem />
        </Paper>
      </Container>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
