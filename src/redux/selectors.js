import { useSelector } from 'react-redux';
/**
 * Selector hooking to the store retrieving corresponding loading state for a certain action
 * @param {AsyncThunk<any, any, any>} action action created using `createAsynThunk`
 * @returns {boolean} loading state for this specific action
 */
const useLoadingSelector = (action) => {
  const { typePrefix } = action;

  return (
    useSelector((state) => {
      return state._loading[typePrefix];
    }) || false
  );
};
export { useLoadingSelector };
