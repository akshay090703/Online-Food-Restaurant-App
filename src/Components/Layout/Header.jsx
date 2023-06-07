import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>TastyFoods</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of tasty and delicious food" />
      </div>
    </>
  );
}
