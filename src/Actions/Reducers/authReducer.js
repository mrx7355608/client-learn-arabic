export default function (state, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.user };
        case "LOGOUT":
            return { ...state, user: {} };
        case "REQUEST_INITIATED":
            return { ...state, loading: true };
        case "REQUEST_FINISHED":
            return { ...state, loading: false };
        case "ERROR":
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}
