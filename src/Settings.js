import ReactSlider from 'react-slider';
import './slider.css';
import SettingsContext from './SettingsContext';
import { useContext } from 'react';
import BackButton from './BackButton';

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: 'left' }}>
      <label>Trabalhar: 00:{settingsInfo.workSeconds}</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workSeconds}
        onChange={(newValue) => settingsInfo.setWorkSeconds(newValue)}
        min={0}
        max={60}
      />
      <label>Pausa: 00:{settingsInfo.breakSeconds}</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakSeconds}
        onChange={(newValue) => settingsInfo.setBreakSeconds(newValue)}
        min={0}
        max={60}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
