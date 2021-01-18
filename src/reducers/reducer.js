
const initState = {
  saveUser: {
    userInfo: {
      role: 'admin'
    }
  }
};

const store = (state = initState, action) => {
  switch (action.type) {
    case 'storeData':
      return {
        ...state,
        reminder: action.payload
      };
    default: return state;
  }
};

export default store;
