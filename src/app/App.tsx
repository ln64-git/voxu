import "./App.css";

function App() {
  return (
    <div className="h-screen bg-stone-800 text-white p-4">
      <div className="max-w-xl mx-auto">
        <div className="text-4xl flex w-full justify-center py-6">Voxu!</div>
        <input
          type="text"
          className="rounded-lg w-full p-4 text-lg bg-stone-900  outline-none"
          placeholder="Enter text here..."
        />
        <div className="flex gap-4 py-2">
          <button className="rounded-lg w-full p-4 text-lg bg-stone-900">
            Stop
          </button>
          <button className="rounded-lg w-full p-4 text-lg bg-stone-900">
            Test
          </button>
          <button className="rounded-lg w-full p-4 text-lg bg-stone-900">
            Next
          </button>
        </div>
        <button className="w-full rounded-lg p-4 text-lg bg-stone-900">
          Speak Clipboard
        </button>
      </div>
    </div>
  );
}

export default App;
