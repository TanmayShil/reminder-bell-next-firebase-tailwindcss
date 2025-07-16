import { useEffect, useState } from "react";
import { requestPermissionAndToken } from "@/lib/messaging";
import { onMessage, messaging } from "@/lib/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [task, setTask] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReminder = () => {
    if (!task.trim()) {
      setError("Task is required!");
      return;
    }

    setError("");
    setLoading(true);

    const delay = minutes * 60 * 1000;

    setTimeout(() => {
      new Notification(`🔔 Reminder: ${task}`);
      toast.success(`Reminder triggered: ${task}`);
    }, delay);

    setTimeout(() => {
      setLoading(false);
      toast.success("Reminder set successfully!");
    }, 800); // simulate network delay

    setTask("");
    setMinutes(1);
  };

  useEffect(() => {
    requestPermissionAndToken();

    if (messaging) {
      onMessage(messaging, (payload) => {
        console.log("Foreground message received:", payload);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center px-4">
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full animate-fade-in">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-700">
          🔔 Reminder Bell
        </h1>

        <input
          type="text"
          placeholder="Enter your task..."
          className={`w-full mb-2 px-4 py-2 border ${
            error ? "border-red-500" : ""
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {error && (
          <p className="text-sm text-red-500 mb-2">{error}</p>
        )}

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Remind me in (minutes):
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={minutes}
            min={1}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
        </div>

        <button
          onClick={handleReminder}
          className={`w-full text-white py-2 px-4 rounded-lg transition ${
            loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          disabled={loading}
        >
          {loading ? "Setting..." : "Set Reminder"}
        </button>
      </div>
    </div>
  );
}

