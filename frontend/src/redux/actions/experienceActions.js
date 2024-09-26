export const fetchExperiences = (params) => {
    return async (dispatch) => {
      try {
        const res = await fetch(`/api/experiences?location=${params.city}`);
        const data = await res.json();
        dispatch({ type: 'FETCH_EXPERIENCES_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_EXPERIENCES_FAIL', payload: 'Failed to fetch experiences' });
      }
    };
  };
  
  export const addExperience = (experienceData) => {
    return async (dispatch) => {
      try {
        const res = await fetch('http://localhost:5001/api/experiences', {
          method: 'POST',
          body: experienceData,
        });
        const data = await res.json();
        dispatch({ type: 'ADD_EXPERIENCE_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'ADD_EXPERIENCE_FAIL', payload: 'Failed to add experience' });
      }
    };
  };
  