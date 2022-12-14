import logo from './logo.svg';
import './App.css';
/* import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF'; */
import TaskListComponent from './components/container/task_list';
import Contacto from './components/pure/forms/contacto';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting*/}
        {/* <Greeting name="Maxi"/> */}
        {/* componente de ejemplo funcional */}
        {/* <GreetingF name="Maxi"/> */}
        {/* componente de listado de tareas */}
        <TaskListComponent/>
        <Contacto name="Maxi" lastname="Coceres" email="maximilianococeres7@gmail.com"/>
      </header>
    </div>
  );
}

export default App;
