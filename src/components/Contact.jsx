import "../styles.css";

export default function contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <br />
      <form>
        <div>
          <input type="text" placeholder="Nom" required="true" />
        </div>
        <div>
          <input type="text" placeholder="Email" required="true" />
        </div>
        <div>
          <input type="text" placeholder="Téléphone" required="true" />
        </div>
        <div>
          <input type="text" placeholder="Sujet" required="true" />
        </div>
        <div>
          <input type="textarea" placeholder="Message" required="true" />
        </div>
        <input type="submit" />
      </form>
      <br />
      <h2>Coordonées</h2>
      <br />
      <p>
        Numéro de téléphone: <strong>0799779784</strong>
      </p>
      <p>
        Adresse:
        <br />
        <strong>18 Rue de Charleville, 58000 Nevers</strong>
      </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.19622087527995!2d3.1502478001349297!3d46.98978445570592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f0458976c0dd09%3A0x99f09b3e7712f9a9!2s18%20Rue%20de%20Charleville%2C%2058000%20Nevers!5e0!3m2!1sen!2sfr!4v1724225312219!5m2!1sen!2sfr"></iframe>
      <br />
    </div>
  );
}
