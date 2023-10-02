const SET_EXERCISES = "setExercises";
const SET_GOALS = "setGoals";
const SET_FOODS = "setFoods";
const SET_LOADING = "setLoading";
const SET_FAIL = "fetchFail";

export const fetchExercises = async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await fetch(
      "https://fitnesstracker.aasimd.repl.co/exercises"
    );
    const data = await response.json();
    dispatch({ type: SET_EXERCISES, payload: data.data });
  } catch (e) {
    dispatch({ type: SET_FAIL, payload: "Error fetching data" });
  }
};

export const fetchAddExercise = async (dispatch, exerciseInfo) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await fetch({
      method: "POST",
      body: {}
    });
  } catch (e) {}
};
