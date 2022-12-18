import logo from './logo.svg';
import './App.css';
/* import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF'; */
import TaskListComponent from './components/container/task_list';
/* import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2'; */
/* ejercicio 1 contacto. */
/* import Contacto from './components/pure/forms/contacto'; */
/* import MiComponenteConContexto from './hooks/ejemplo3'; */

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting*/}s
        {/* <Greeting name="Maxi"/> */}
        {/* componente de ejemplo funcional */}
        {/* <GreetingF name="Maxi"/> */}
        {/* componente de listado de tareas */}
        <TaskListComponent/>
        {/* <Contacto name="Maxi" lastname="Coceres" email="maximilianococeres7@gmail.com"/> */}
        {/* ejemplo de hooks */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      </header>
    </div>
  );
}

export default App;
 