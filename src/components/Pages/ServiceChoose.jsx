import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
import {
  chooseService,
  changeServiceField,
  editService,
} from "../../actions/actionCreators";

export default function ServiceChoose(props) {
  const id = Number(props.match.params.id);
  const { history } = props;

  const { loadingEdit, errorEdit } = useSelector(
    (state) => state.serviceLoadingEdit
  );

  console.log(loadingEdit);

  const { item, loading, error } = useSelector((state) => state.serviceChoose);

  const dispatch = useDispatch();

  useEffect(() => {
    chooseService(dispatch, id);
  }, [dispatch]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editService(dispatch, item.id, item.name, item.price, item.content);
  };

  return (
    <div className="service">
      {loading && <div className="loading">Идет загрузка</div>}
      {error && <div className="error">Something went wrong try again</div>}
      {!loading && !error && (
        <form onSubmit={handleSubmit}>
          <input name="name" onChange={handleChange} value={item.name} />
          <input name="price" onChange={handleChange} value={item.price} />
          <input name="content" onChange={handleChange} value={item.content} />
          <button onClick={() => history.goBack}>Отмена</button>
          <button type="submit">Сохранить</button>
        </form>
      )}
    </div>
  );
}

// onClick={() => {
//   {
//     loading && <div className="loading">Идет загрузка данных</div>;
//   }
//   {
//     error && (
//       <div className="error">Корректировка данных не удалась</div>
//     );
//   }
// }}
