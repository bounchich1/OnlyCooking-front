import "./root.scss"
import { Link } from "react-router-dom"
import Logo from "../../ui/components/Logo/Logo.tsx"

export default function Root() {
    return (
        <div className="root">
            <div className="root__logo">
                <Logo />
            </div>
            <Link className="root__link" to="/login">
                Login page
            </Link>
            <Link className="root__link" to="/register">
                Register page
            </Link>
            <Link className="root__link" to="/recipes">
                Recipes page
            </Link>
            <Link className="root__link" to="/home">
                Home page
            </Link>
        </div>
    )
}