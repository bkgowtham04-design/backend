import { Link, Route, Routes } from "react-router-dom";

import Welcome from './componets/Welcome';
import LifecycleDemo from './componets/LifecycleDemo';

import UseStateDemo from './hooks/UseStateDemo';
import Change from "./hooks/Change";
import ObjectState from './hooks/ObjectState';

const App =()=> {
  return (
    <>
     <nav className="bg-gray-900 text-white p-4 flex justify-center gap-8 shadow-md">
  <Link to="/" className="hover:text-blue-400 transition">
    TASK 1
  </Link>

  <Link to="/task2" className="hover:text-blue-400 transition">
    TASK 2
  </Link>

  <Link to="/task3" className="hover:text-blue-400 transition">
    TASK 3
  </Link>

  <Link to="/task4" className="hover:text-blue-400 transition">
    TASK 4
  </Link>

  <Link to="/task5" className="hover:text-blue-400 transition">
    TASK 5
  </Link>
</nav>

      <Routes>
        {/* Task 1 */}
        <Route path="/" element={<Welcome />} />

        {/* Task 2 */}
        <Route path="/task2" element={<LifecycleDemo />} />

        {/* Task 3 */}
        <Route path="/task3" element={<UseStateDemo />} />

        {/* Task 4 */}
        <Route path="/task4" element={<Change />} />

        {/* Task 5 */}
        <Route path="/task5" element={<ObjectState />} />
      </Routes>
    </>
  );
}

export default App;