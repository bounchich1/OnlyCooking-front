import "./icon-button.scss"
import {
    MagnifyingGlassIcon as SearchIcon
} from "@heroicons/react/24/outline";
import {
    UserIcon as UserIcon
} from "@heroicons/react/24/solid";

const iconMap = {
    search: SearchIcon,
    user: UserIcon,
}
interface SearchProps {
    icon: "search" | "user",
    onClick: React.MouseEventHandler,
    size?: "small" | "default" | "big",
}
export default function IconButton({icon, onClick, size = "small"}: SearchProps) {
    const Icon = iconMap[icon]
    return (
        <div className={`icon icon--${size}`}
             onClick={onClick}>
            <Icon className="icon__img" />
        </div>
    )
}