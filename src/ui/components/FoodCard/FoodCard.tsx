import "./food-card.scss"
import CardButton from "../CardButton/CardButton.tsx";

interface FoodCardProps {
    imgUrl: string,
    dishName: string,

}
export default function FoodCard({imgUrl, dishName}: FoodCardProps) {

    const handleRecipeClick = () => {

    }
    return (
        <div className="food-card">
            <div className="food-card__container">
                <div className="food-card__container-text">{dishName}</div>
                <img src={imgUrl} alt="dish img" className="food-card__container-img" />
                <CardButton onClick={handleRecipeClick}>See complete recipe</CardButton>
            </div>
        </div>
    )
}