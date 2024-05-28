import React ,{Suspense, lazy} from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
//import RestorentCard from "./components/RestorentCard";
import {createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restorentmenu from "./components/Restorentmenu";

/*
 code splitting
 dynamic bundaling
 splitting
 dynamic importing
 on demand call

*/
const Grosery = lazy(()=>import("./components/Grosery"))

const About = lazy(()=>import("./components/About"))

const SwigyApp = () => {
    return (
    <div className="appLayout">
        <HeaderComponent/>
        <Outlet/>

    </div>

    )

}

const amarRouter = createBrowserRouter([
    {
        path: "/",
        element : <SwigyApp/>,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
                 {
                path: "/src/about",
                element : <Suspense><About/></Suspense>,
                },
                {
                    path: "/contact",
                    element : <Contact/>,
                },
                {
                    path: "/grosery",
                    element : <Suspense><Grosery/></Suspense>,
                },
                {
                    path: "/restorents/:resId",
                    element: <Restorentmenu/>
                }

        ],
        errorElement :<Error/>,
    },
   
]);
const root = ReactDom.createRoot(document.getElementById("root"));
//root.render(<SwigyApp/>);

root.render(<RouterProvider router={amarRouter} />)
//root.render(amar);
