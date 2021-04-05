import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, fetchServices } from "../actions/actionCreators";

function ServiceList(props) {
  const { items, loading, error } = useSelector((state) => state.serviceList);

  //const { loading, error } = useSelector((state) => state.serviceLoading);

  //console.log(loading);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch);
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  // const handleEdit = (id) => {
  //   dispatch(removeService(id));
  // };

  if (loading) {
    return <div class="loading">Идет загрузка</div>;
  }

  if (error) {
    return <p>Something went wrong try again</p>;
  }

  return (
    <>
      <ul>
        {items.map((o) => (
          <li key={o.id}>
            {o.name} {o.price}
            <button /*onClick={() => handleEdit(o.id)}*/>✎</button>
            <button onClick={() => handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ServiceList;
