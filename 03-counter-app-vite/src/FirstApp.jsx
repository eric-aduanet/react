import { Fragment } from "react";
import PropTypes from "prop-types";
const getSaludo = (nombre) => "Hola, " + nombre;

const newMsg = {
  msg: "Hola mundo",
  title: "Eric",
};

export const FirstApp = ({
  title = "Hola, soy Eric!",
  subtitle = "",
  name = "No hay nombre",
}) => {
  //   console.log(props);
  return (
    <Fragment>
      <h1 data-testid="test-title">{title}</h1>
      {/* <h1>{JSON.stringify(newMsg)}</h1> */}
      <h2>{subtitle}</h2>
      <p>{name}</p>
    </Fragment>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};

import "./index.css";
