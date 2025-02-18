import "./header-item.scss"
import { ReactNode } from "react";
import dot from "../../assets/icons/dot.svg";
import { Link, useLocation } from "react-router-dom";


interface HeaderItemProps {
    path: string,
    children: ReactNode,
}

export default function HeaderItem({ path, children }: HeaderItemProps) {
    const location = useLocation();
    return (
        <div className={ `header-item ${ location.pathname === path ? "active": "" }` }>
            <img src={dot} alt="dot" className="header-item-dot" />
            <Link className="header-item-text" to={ path }>{ children }</Link>
        </div>
    )
}