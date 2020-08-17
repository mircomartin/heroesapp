import { LOGIN, LOGOUT } from '../types';

const initialState = {
    logged: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				logged: true,
				name: action.payload.name,
			};
		case LOGOUT:
			return {
                logged: false,
            };
		default:
			return state;
	}
};
