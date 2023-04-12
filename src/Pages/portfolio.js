import * as React from "https://cdn.skypack.dev/react@17.0.1";
/* import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1"; */
import "./card.scss";

import { Link } from "react-router-dom";

import kitchen from "../assets/17kv/04.jpg";

import hall from "../assets/17kv/05.jpg";

import bedroom from "../assets/17kv/013.jpg";

import cabinet from "../assets/17kv/025.jpg";

import childroom from "../assets/17kv/018.1.jpg";

import bathroom from "../assets/17kv/031.jpg";

import wardrobe from "../assets/17kv/027.1.jpg";

import hallway from "../assets/17kv/010.jpg";

/* import photos from "./Components/photos"; */
/* const images = [[kitchen], [kitchen1], [kitchen2], [kitchen3]]; */
/* переделать в массив, попробовать JSON */

function Portfolio() {
  return (
    <div
      className="mt-5"
      style={{
        fontWeight: "bold",
        fontFamily: "Montserrat, sans-serif",
        marginLeft: "1em",
        textAlign: "center",
        color: "#46669c",
      }}
    >
      <h4
        style={{
          marginTop: "4em",
        }}
      >
        <strong> НАШЕ ПОРТФОЛИО</strong>
      </h4>

      <h5>3Д ВИЗУАЛИЗАЦИЯ ИНТЕРЬЕРА</h5>
      <h6 className="mt-5">Визуализация интерьера квартиры.</h6>
      <div className="wrapper mt-4">
        <div className="card">
          <Card
            img={kitchen}
            alt="kitchen"
            title="КУХНЯ"
            description="Дизайн интерьера кухни в Кривом Роге."
          />
          <Link to="/Gallary">
            <button className="card__btn">ПОСМОТРЕТЬ</button>
          </Link>
        </div>
        <div className="card">
          <Card
            img={hall}
            alt="hall"
            title="Гостиная"
            description="Дизайн интерьера гостиной в Кривом Роге."
          />
          <Link to="/GallaryHall-17">
            <button className="card__btn">ПОСМОТРЕТЬ</button>
          </Link>
        </div>
        <div className="card">
          <Card
            img={bedroom}
            alt="bedroom"
            title="Спальня"
            description="Дизайн интерьера спальни в Кривом Роге."
          />
          <Link to="/Gallary1">
            <button className="card__btn">ПОСМОТРЕТЬ</button>
          </Link>
        </div>
        <div className="card">
          <Card
            img={childroom}
            alt="cabinet"
            title="Детская"
            description="Дизайн интерьера детской в Кривом Роге."
          />
          <Link to="/Gallary">
            <button className="card__btn">ПОСМОТРЕТЬ</button>
          </Link>
        </div>
        <div className="card">
          <Card
            img={cabinet}
            alt="cabinet"
            title="Кабинет"
            description="Дизайн интерьера кабинета в Кривом Роге."
          />
          <Link to="/Gallary">
            <button className="card__btn">ПОСМОТРЕТЬ</button>
          </Link>
        </div>
        <div className="card">
          <Card
            img={bathroom}
            alt="bathroom"
            title="Ванная"
            description="Дизайн интерьера ванной в Кривом Роге."
          />
          <Link to="/Gallary">
            <button className="card__btn">ПОСМОТРЕТЬ</button>
          </Link>
        </div>
        <div className="card">
          <Card
            img={wardrobe}
            alt="wardrobe"
            title="Гардеробная"
            description="Дизайн интерьера гардеробной в Кривом Роге."
          />
          <Link to="/Gallary">
            <button className="card__btn">ПОСМОТРЕТЬ</button>
          </Link>
        </div>
        <div className="card">
          <Card
            img={hallway}
            alt="hallway"
            title="Прихожая"
            description="Дизайн интерьера прихожей в Кривом Роге."
          />
          <Link to="/Gallary">
            <button className="card__btn">ПОСМОТРЕТЬ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div /* className="card" */>
      <div className="card__body">
        <img src={props.img} className="card__image" alt="card" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      {/* <button className="card__btn">ПОСМОТРЕТЬ</button> */}
      {/* <Link to="/Gallary" >
        <button className="card__btn">ПОСМОТРЕТЬ</button>
      </Link> */}
    </div>
  );
}

export default Portfolio;
