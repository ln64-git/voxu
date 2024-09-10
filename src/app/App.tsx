import './App.css';
import React, { useState, useEffect } from 'react';
import { voxCtl } from '../utility/voxctl';

function App() {
  const [statusColor, setStatusColor] = useState('bg-neutral-700');
  const [inputText, setInputText] = useState('');

  const updateStatus = async () => {
    try {
      const { speechActive } = await voxCtl.getStatus();
      setStatusColor(speechActive ? 'bg-green-500' : 'bg-neutral-700');
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };
  useEffect(() => {
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  const ActionButton: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
  }> = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-full rounded-lg bg-stone-900 p-4 text-lg"
    >
      {children}
    </button>
  );

  return (
    <div className="h-screen bg-stone-800 p-4 text-white">
      <div className="mx-auto max-w-xl">
        <div className="flex w-full justify-center py-6 text-4xl">Voxu !</div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full rounded-lg bg-stone-900 p-4 text-lg outline-none"
          placeholder="Enter text here..."
        />
        <div className="flex gap-4 py-2">
          <ActionButton onClick={() => voxCtl.stop()}>Stop</ActionButton>
          <ActionButton onClick={() => voxCtl.speak(inputText)}>
            Speak
          </ActionButton>
          <ActionButton onClick={() => voxCtl.speak(inputText)}>
            Next
          </ActionButton>
        </div>
        <ActionButton onClick={() => voxCtl.speakClipboard()}>
          Speak Clipboard
        </ActionButton>
        <div className={`m-4 rounded-lg p-1 ${statusColor}`}></div>
      </div>
    </div>
  );
}

export default App;
