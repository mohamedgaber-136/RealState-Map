import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import logo from './assets/Asset 62.png'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./Page/Login.jsx";
async function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
}
let LandingLazy = lazy(() =>
  delayForDemo(import("./App.jsx"))
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
   <Route path="/"  index element={<Login/>}/>
   <Route path="home"  index element={
   <Suspense
   fallback={
     <div className="d-flex vh-100 vw-100 justify-content-center bgBlack align-items-center LoaderParent" >
<img src={logo} alt="" className="loading" style={{objectFit:'contain' ,width:'100px',height:'100px',backgroundColor:'transparent'}} />
     </div>
   }
 >

   <LandingLazy/>

 </Suspense>
   
   }/>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
