import { Key } from "react";
import MealItem from "../meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }: any) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: { id: Key | null | undefined }) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
