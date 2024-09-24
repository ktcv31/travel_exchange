const initialState = {
    experiences: [],
    error: null,
  };
  
  export const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EXPERIENCES_SUCCESS':
        return { ...state, experiences: action.payload };
      case 'ADD_EXPERIENCE_SUCCESS':
        return { ...state, experiences: [...state.experiences, action.payload] };
      case 'FETCH_EXPERIENCES_FAIL':
      case 'ADD_EXPERIENCE_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  