
import Navbar from "./components/Navbar";
import RightColumn from "./components/RightColumn";
import Sidebar from "./components/Sidebar";
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';

import RootLayout from "./layouts/RootLayout";
import LeftColumn from "./components/LeftColumn";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      
      
    </Route>
  )
)



function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App;
