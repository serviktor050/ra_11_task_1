import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  REMOVE_SERVICE,
  // SERVICE_LOADING_REQUEST,
  // SERVICE_LOADING_FAILURE,
  // SERVICE_LOADING_SUCCESS,
} from "./actionTypes";

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = (error) => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = (items) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const addServiceRequest = (name, price) => ({
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
  },
});

export const addServiceFailure = (error) => ({
  type: ADD_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const addServiceSuccess = () => ({
  type: ADD_SERVICE_SUCCESS,
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const removeService = (id) => ({
  type: REMOVE_SERVICE,
  payload: {
    id,
  },
});

// export const serviceLoadingRequest = () => ({
//   type: SERVICE_LOADING_REQUEST,
// });

// export const serviceLoadingFailure = (error) => ({
//   type: SERVICE_LOADING_FAILURE,
//   payload: { error },
// });

// export const serviceLoadingSuccess = () => ({
//   type: SERVICE_LOADING_SUCCESS,
// });

export const fetchServices = async (dispatch) => {
  dispatch(fetchServicesRequest());
  // dispatch(serviceLoadingRequest());
  try {
    const response = await fetch(
      "https://ra-11-task-1-server.herokuapp.com/api/services"
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    // dispatch(serviceLoadingSuccess());
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
};

export const addService = async (dispatch, name, price) => {
  dispatch(addServiceRequest());
  try {
    const response = await fetch(
      "https://ra-11-task-1-server.herokuapp.com/api/services",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price }),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }
  fetchServices(dispatch);
};
