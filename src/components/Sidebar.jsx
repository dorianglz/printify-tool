import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 h-screen p-6 text-white">
      <h1 className="text-xl font-bold mb-6">Hello User</h1>
      <nav>
        <ul className="space-y-4">
          <li className="p-2 rounded bg-yellow-500 text-black">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-2 rounded hover:bg-gray-700">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}