import "./chip.scss"
import apperizersIcon from "../../assets/icons/appetizers.svg"
import mainCoursesIcon from "../../assets/icons/main-courses.svg"
import allTypesIcon from "../../assets/icons/alltypes.svg"
import saladIcon from "../../assets/icons/salad.svg"
import cakeIcon from "../../assets/icons/cake.svg"
import leafIcon from "../../assets/icons/leaf.svg"
import internationalIcon from "../../assets/icons/international.svg"
import healthIcon from "../../assets/icons/health.svg"
import clockIcon from "../../assets/icons/clock.svg"
import { ReactNode } from "react";

const iconMap = {
    appetizers: apperizersIcon,
    mainCourses: mainCoursesIcon,
    allTypes: allTypesIcon,
    clock: clockIcon,
    salad: saladIcon,
    cake: cakeIcon,
    leaf: leafIcon,
    international: internationalIcon,
    health: healthIcon,
}

interface ChipProps {
    icon: keyof typeof iconMap,
    isActive?: boolean,
    children?: ReactNode
}

export default function Chip({ icon, isActive, children }: ChipProps) {
    const Icon = iconMap[icon]
    return (
        <div className={`chip-container ${isActive ? "active" : ""}`}>
            <img src={Icon} alt="icon" />
            <div className="chip-container__text">{children}</div>
        </div>
    )
}