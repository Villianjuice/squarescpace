import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <Link to="/" className="item__link">
          ← Вернуться на главную
        </Link>
      </div>
      <div className="container notfound">
        <h2 className="notfound__title">Ничего не найдено</h2>
        <p>Такой страницы не существует</p>
      </div>
    </>
    
  );
};

export default NotFound;
