import { ProgressBar } from "react-bootstrap";
import Image from "./image";

import "../styles.css";

export default function home() {
  return (
    <div className="Home">
      <h1>Accueil</h1>
      <h2>À propos</h2>
      <Image src={"19842736.png"} />
      <h3>Ses compétences</h3>
      <ProgressBar
        className="bar"
        animated
        variant="success"
        now={90}
        label={`Html`}
      />
      <ProgressBar
        className="bar"
        animated
        variant="info"
        now={75}
        label={`Css`}
      />
      <ProgressBar
        className="bar"
        animated
        variant="warning"
        now={55}
        label={`Java script`}
      />
      <ProgressBar
        className="bar"
        animated
        variant="danger"
        now={85}
        label={`React js`}
      />
      <br />
    </div>
  );
}
