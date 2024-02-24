import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Forms/SignUp";
import LogIn from "../Pages/Forms/LogIn";
import FilterByCategorey from "../Pages/FilterByCategorey/FilterByCategorey";
import DetailsCard from "../Pages/DetailsCard/DetailsCard";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import ReportedProduct from "../Pages/Dashboard/ReportedProduct/ReportedProduct";
import Advertising from "../Pages/Advertising/Advertising";
import AllUsedProducts from "../Pages/AllUsedProducts/AllUsedProducts";
import Blog from "../Pages/ExtraPages/Blog";
import AboutUs from "../Pages/ExtraPages/AboutUs";

export const routes = createBrowserRouter([
    {
     path: '/',
     element: <Main />,
     errorElement: <ErrorPage />,
     children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path:'/signUp',
            element: <SignUp />
          },
          {
            path:'/login',
            element: <LogIn />
          },
          {
            path: '/usedMobile/:categorey',
            loader:async({params})=> await fetch(`https://mobile-market-server.onrender.com/usedMobile/${params.categorey}`),
            element: <FilterByCategorey />
        },
        {
            path: '/mobile/:id',
            loader: async({params})=> await fetch(`https://mobile-market-server.onrender.com/mobile/${params.id}`),
            element: <DetailsCard />
        }, 
        {
            path: '/advertising',
            element: <Advertising />
        },
        {
            path: '/product',
            element: <AllUsedProducts />
        },
        {
            path: '/aboutUs',
            element: <AboutUs />
        },  
        {
            path: '/blog',
            element: <Blog />
        }, 
     ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage />,
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder />
                // element: <PrivetRoute><MyOrders></MyOrders></PrivetRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct />
                // element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct />
                // element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/reportedProduct',
                element: <ReportedProduct />
                // element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
            },
            {
                path: '/dashboard/allUsers',
                 element: <AllUsers />
                // element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
  
])