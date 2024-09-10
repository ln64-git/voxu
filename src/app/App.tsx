import './App.css';

function App() {
  return (
    <div className="h-screen bg-stone-800 p-4 text-white">
      <div className="mx-auto max-w-xl">
        <div className="flex w-full justify-center py-6 text-4xl">Voxu !</div>
        <input
          className="w-full rounded-lg bg-stone-900 p-4 text-lg outline-none"
          placeholder="Enter text here..."
        />
        <div className="flex gap-4 py-2">
          <button className="w-full rounded-lg bg-stone-900 p-4 text-lg">
            Stop
          </button>
          <button className="w-full rounded-lg bg-stone-900 p-4 text-lg">
            Test
          </button>
          <button className="w-full rounded-lg bg-stone-900 p-4 text-lg">
            Next
          </button>
        </div>
        <button className="w-full rounded-lg bg-stone-900 p-4 text-lg">
          Speak Clipboard
        </button>
      </div>
    </div>
  );
}

export default App;
