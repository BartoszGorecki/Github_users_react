import {
    actionTypes
} from '../actions';

const initialState = {
    isFetchingUsers: false,
    isFetchingRepositories: false,
    selectedUsers: null,
    repositories: {},
    query: '',
    error: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                error: null,
                isFetchingUsers: true,
                repositories: {},
                query: ''
            }
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetchingUsers: false,
                selectedUsers: payload
            }
        case actionTypes.FETCH_USERS_FAILURE:
            const { error } = payload;

            return {
                ...state,
                error,
                isFetchingUsers: false
            }
        case actionTypes.FETCH_REPOSITORIES_REQUEST:
            return {
                ...state,
                isFetchingRepositories: true
            }
        case actionTypes.FETCH_REPOSITORIES_SUCCESS:
            const { user, repositories } = payload;

            return {
                ...state,
                isFetchingRepositories: false,
                repositories: { ...state.repositories, [user]: repositories }
            }
        default:
            return state;
    };
};