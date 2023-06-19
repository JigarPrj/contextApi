import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Person1 from './component/Person1';
import Person2 from './component/Person2';
import { WeightState } from './component/Weight';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Person1 />,
    },
    {
      path: "/class",
      element: <Person2 />,
    },
  ]);
  return (
    <WeightState>
    <RouterProvider router={router} />
    </WeightState>
  );
}

export default App;
