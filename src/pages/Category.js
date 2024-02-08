import { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Обратно
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default Category;
