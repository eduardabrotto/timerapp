import './App.css';
import Timer from './Timer';
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workSeconds, setWorkSeconds] = useState(25);
  const [breakSeconds, setBreakSeconds] = useState(5);

  return (
    <main>
      <h1>Relógio Pomodoro</h1>
      <h3>Seja produtivo da melhor forma!</h3>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workSeconds,
          breakSeconds,
          setWorkSeconds,
          setBreakSeconds,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
