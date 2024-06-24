import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/OnBoarding/Login';
import { SignUp } from "./pages/OnBoarding/SignUp";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { DropdownSidebar } from "./components/DropdownSidebar";
import { AuctionPage } from "./pages/Auction";
import { MyBidsPage } from "./pages/MyBids";


export const Layout = () => {
  return (
    <div className='xl:grid xl:grid-cols-6 w-full flex'>
      <Sidebar />
      <div className='w-full xl:col-span-5 xl:px-4 xl:py-6 p-4 gap-2 flex flex-col '>
        <Navbar />
        <DropdownSidebar />
        <main className="w-full xl:p-4 "> {/* Adjust padding as necessary */}
          <Outlet />
        </main>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/auction",
        element: <AuctionPage />
      },
      {
        path: "/mybids",
        element: <MyBidsPage />
      }
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
