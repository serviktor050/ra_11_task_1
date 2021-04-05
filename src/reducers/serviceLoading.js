// import {
//   SERVICE_LOADING_REQUEST,
//   SERVICE_LOADING_FAILURE,
//   SERVICE_LOADING_SUCCESS,
// } from "../actions/actionTypes";

// const initialState = {
//   loading: false,
//   error: null,
// };

// export default function serviceLoadingReducer(state = initialState, action) {
//   switch (action.type) {
//     case SERVICE_LOADING_REQUEST:
//       return {
//         loading: true,
//         error: null,
//       };
//     case SERVICE_LOADING_FAILURE:
//       const { error } = action.payload;
//       return {
//         loading: false,
//         error,
//       };
//     case SERVICE_LOADING_SUCCESS:
//       return {
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// }
