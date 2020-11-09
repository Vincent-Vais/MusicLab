export const selectAll = (state) =>
  state.refs.sort((a, b) => a.ref.offsetTop - b.ref.offsetTop);

export default { selectAll };
