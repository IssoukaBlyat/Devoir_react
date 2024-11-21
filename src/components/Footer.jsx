import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Foot = () => {
  return (
    <footer>
      <table>
        <tr>
          <th>John Doe</th>
          <th>
            <Link to="/">Accueil</Link>
          </th>
          <th>Réalisation 1</th>
          <th>Blog 1</th>
        </tr>
        <tr>
          <th>
            18 Rue de Charleville
            <br />
            58000 Nevers
          </th>
          <th>
            <Link to="/service">Services</Link>
          </th>
          <th>Réalisation 2</th>
          <th>Blog 2</th>
        </tr>
        <tr>
          <th>Numéro de téléphone</th>
          <th>
            <Link to="/realisation">Réalisations</Link>
          </th>
          <th>Réalisation 3</th>
          <th>Blog 3</th>
        </tr>
        <tr>
          <th>
            <a href="#" target={"_blank"}>
              <img className="logo" src="./githublogo.png" />
            </a>
            <a href="#" target={"_blank"}>
              <img className="logo" src="./twitterlogo.png" />
            </a>
            <a href="#" target={"_blank"}>
              <img className="logo" src="./linkedinlogo.png" />
            </a>
          </th>
          <th>
            <Link to="/blog">Blog</Link>
          </th>
          <th className="vide"></th>
          <th>Blog 4</th>
        </tr>
        <tr>
          <th className="vide"></th>
          <th>
            <Link to="/contact">Contact</Link>
          </th>
          <th className="vide"></th>
          <th>Blog 5</th>
        </tr>
        <tr>
          <th className="vide"></th>
          <th>
            <Link to="/mention">Mentions légales</Link>
          </th>
          <th className="vide"></th>
          <th>Blog 6</th>
        </tr>
      </table>
      <Button href="#top">Revenir au début de la page</Button>
      <br />
      <small>Copyright © 2024</small>
    </footer>
  );
};

export default Foot;
