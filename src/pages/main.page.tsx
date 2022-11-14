import { Link } from "react-router-dom";
import "./main.page.sass";

const MainPage = () => {
  console.log("main");
  return (
    <div className="main-page">
      <div className="main-page__title">Pages</div>
      <div className="main-page__menu">
        <div className="main-page__item">
          <Link to="/about-me">About me</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
