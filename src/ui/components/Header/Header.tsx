import "./header.scss"
import Logo from "../Logo/Logo.tsx";
import IconButton from "../IconButton/IconButton.tsx";
import HeaderItem from "../HeaderItem/HeaderItem.tsx";

export default function Header() {
    const handleSearchClick = () => {

    }
    return (
        <div className="header-container">
            <Logo />
            <div className="header-container__nav-menu">
                <HeaderItem path="/home">HOME</HeaderItem>
                <HeaderItem path="/about">ABOUT</HeaderItem>
                <HeaderItem path="/recipes">RECIPES</HeaderItem>
                <HeaderItem path="/contact">CONTACT</HeaderItem>
            </div>
            <div className="header-container__search">
                <div className="header-container__search-icon">
                    <IconButton icon="search" onClick={handleSearchClick} size="big"/>
                </div>
                <IconButton icon="user" onClick={handleSearchClick} size="big" />
            </div>
        </div>
    )
}