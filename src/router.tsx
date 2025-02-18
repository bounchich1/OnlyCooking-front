import { createBrowserRouter } from "react-router-dom"
import Root from "./pages/Root/Root.tsx"
import Recipes from "./pages/Recipes/Recipes.tsx";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Home from "./pages/Home/Home.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/recipes",
        element: <Recipes />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/home",
        element: <Home />
    }

    ])
