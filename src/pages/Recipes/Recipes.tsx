import "./recipes.scss"
import Chip from "../../ui/components/Chip/Chip.tsx";
import Header from "../../ui/components/Header/Header.tsx";
import Footer from "../../ui/components/Footer/Footer.tsx";

export default function Recipes() {

    return (
        <div className="recipes">

            <Header />

            <div className="recipes image-container">
                <div className="image-container__image-style">
                    <div className="image-container__image-text image-container__image-text--black">Explore</div>
                    <div className="image-container__image-text-row">
                        <div className="image-container__image-text image-container__image-text--orange">Culinary</div>
                        <div className="image-container__image-text image-container__image-text--black">Insights</div>
                    </div>
                </div>
            </div>

            <div className="recipes question-text">
                <div className="question-text--black">What</div>
                <div className="question-text--black">to</div>
                <div className="question-text--nogap">
                    <div className="question-text--orange">Cook</div>
                    <div className="question-text--black">?</div>
                </div>
            </div>

            <div className="chips-container">
                <Chip icon="allTypes" isActive={true}>All Types</Chip>
                <Chip icon="appetizers">Appetizers</Chip>
                <Chip icon="mainCourses">Main Courses</Chip>
                <Chip icon="salad">Salads & Sides</Chip>
                <Chip icon="leaf">Vegeterian Delights</Chip>
            </div>
            <div className="chips-container">
                <Chip icon="international">International flavours</Chip>
                <Chip icon="cake">Desserts & Sweets</Chip>
                <Chip icon="health">Healthy Eats</Chip>
                <Chip icon="clock">Quick & Easy</Chip>
            </div>

            <Footer />
        </div>


    )
}