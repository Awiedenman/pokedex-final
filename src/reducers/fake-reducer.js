export const fakeReducer = (state = 'this is a fake action', action) => {
  switch (action.type) {
    default: return state;
  }
};