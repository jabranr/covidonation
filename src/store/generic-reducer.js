export default function genericReducer(state, update) {
  return {
    ...state,
    ...update
  };
}
