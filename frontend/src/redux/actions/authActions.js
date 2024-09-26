const base_url = process.env.REACT_API_BASE_URL || 'https://travel-exchange.onrender.com/api';

export const loginUser = (email, password) => {
    return async (dispatch) => {
      try {
        const res = await fetch(`${base_url}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        } else {
          dispatch({ type: 'LOGIN_FAIL', payload: data.error });
        }
      } catch (err) {
        dispatch({ type: 'LOGIN_FAIL', payload: 'Server error' });
      }
    };
  };
  
  export const registerUser = (username, email, password) => {
    return async (dispatch) => {
      try {
        const res = await fetch(`${base_url}/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await res.json();
        if (res.ok) {
          dispatch({ type: 'REGISTER_SUCCESS', payload: data });
        } else {
          dispatch({ type: 'REGISTER_FAIL', payload: data.error });
        }
      } catch (err) {
        dispatch({ type: 'REGISTER_FAIL', payload: 'Server error' });
      }
    };
  };
  
