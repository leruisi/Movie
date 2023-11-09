import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {router} from "./router";
import {ContexProvider} from "./hoc/ContexProvider";




const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ContexProvider><RouterProvider router={router}/></ContexProvider>
);