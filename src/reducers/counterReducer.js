const counterReducer = (state=0, action) => {
    switch (action.type) {
        case 'DECREMENT': {
            return state--;
        }
        case 'INCREMENT': {
            return state++;
        }
        default:
            return state;
    }
};

export default counterReducer