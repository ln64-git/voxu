import { useState, useEffect } from 'react';
import './App.css';
import { voxCtl } from '../utility/voxctl';

function App() {
  const [bgColor, setBgColor] = useState('bg-neutral-700');

  async function updateStatus() {
    const data = await voxCtl.getStatus();
    if (data) {
      if (data.speechActive) {
        setBgColor('bg-green-500');
      } else {
        setBgColor('bg-neutral-700');
      }
    }
  }
  useEffect(() => {
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-stone-800 p-4 text-white">
      <div className="mx-auto max-w-xl">
        <div className="flex w-full justify-center py-6 text-4xl">Voxu !</div>
        <input
          className="w-full rounded-lg bg-stone-900 p-4 text-lg outline-none"
          placeholder="Enter text here..."
        />
        <div className="flex gap-4 py-2">
          <button
            onClick={() => voxCtl.stop()}
            className="w-full rounded-lg bg-stone-900 p-4 text-lg"
          >
            Stop
          </button>
          <button
            onClick={() => voxCtl.speak('Test')}
            className="w-full rounded-lg bg-stone-900 p-4 text-lg"
          >
            Speak
          </button>
          <button
            onClick={() => voxCtl.speak('Test')}
            className="w-full rounded-lg bg-stone-900 p-4 text-lg"
          >
            Next
          </button>
        </div>
        <button
          onClick={() => voxCtl.speakClipboard()}
          className="w-full rounded-lg bg-stone-900 p-4 text-lg"
        >
          Speak Clipboard
        </button>
        <div className={`m-4 rounded-lg p-1 ${bgColor}`}></div>
      </div>
    </div>
  );
}

export default App;
