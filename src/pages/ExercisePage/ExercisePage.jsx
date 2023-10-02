import { useSelector, useDispatch } from "react-redux";
import { fetchExercises } from "../../redux/actions";
import { useEffect } from "react";

export const ExercisePage = () => {
  const exercises = useSelector((state) => state.exercises);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  useEffect(() => {
    fetchExercises(dispatch);
  }, [dispatch]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Exercises</h1>
      <ul>
        {exercises.map((exercise) => {
          const { name, duration, caloriesBurned, _id } = exercise;
          return (
            <li key={_id}>
              <h3>{name}</h3>
              <p>
                <b>Duration: </b>
                {duration} minutes <br />
                <b>Calories Burned: </b>
                {caloriesBurned} cals
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
