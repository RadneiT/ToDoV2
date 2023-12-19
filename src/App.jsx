import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
      <div className='task-app'>
        <div className='principal-task-list'>
          <h1>Mis Tareas</h1>
          <TaskList />

        </div>
      </div>
  );
}

export default App;
