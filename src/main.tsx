import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./router.tsx"
import "./index.scss"
import {Provider} from "react-redux";
import {store} from "./services/state/store.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
            <RouterProvider router={router} />
    </StrictMode>,
)
