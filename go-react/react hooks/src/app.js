export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
export async function getInitialState() {
  // const data = await fetchXXX();
  // return data;
}
