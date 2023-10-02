const initialState = {
  loading: false,
  exercises: [],
  goals: [],
  foods: [],
  error: null
};

export const fitnessTrackerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "setLoading":
      return { ...state, loading: true };
    case "setExercises":
      return { ...state, exercises: payload, loading: false };
    case "setGoals":
      return { ...state, goals: payload, loading: false };
    case "setFoods":
      return { ...state, foods: payload, loading: false };
    case "fetchFail":
      return {
        ...state,
        loading: false,
        error: "Error fetching data"
      };
    default:
      return state;
  }
};
