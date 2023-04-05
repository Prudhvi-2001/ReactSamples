import logo from './logo.svg';
import './App.css';
import UsestateHook from './components/UsestateHook';
import UseEffectHook from './components/UseEffectHook';
import RefHook from './components/RefHook';
import { createContext } from 'react';
import UseContextHook from './components/UseContextHook';
export const contextExp=createContext();
function App() {
  return (
    <div className="App">
     <contextExp.Provider value={'Kuntrapakam Muni Prudhvi --> UseContext'}>
      <UseContextHook/>
     </contextExp.Provider>
      <UsestateHook/>
      <UseEffectHook/>
      <RefHook/>
    </div>
  );
}

export default App;
