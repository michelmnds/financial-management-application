import "./style.css";
import { Form } from "../../components/Form";

import "../../styles/globalStyle.css";

import logo from "../../img/logoDark.png";

export function HomePage({ children }) {
  return (
    <>
      <header className="headerContainerHome">
        <img className="logoHome" src={logo} alt="logo dark" />
        {children}
      </header>

      <Form></Form>
    </>
  );
}
