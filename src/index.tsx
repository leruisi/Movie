import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {router} from "./router";
import {ContextProvider} from "./components/hoc/ContexProvider";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ContextProvider><RouterProvider router={router}/></ContextProvider>
);