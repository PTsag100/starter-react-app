import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="ieee-logo">
        <img src="/IEEE_logo_white.png" alt="IEEE Logo" />
        <h1>IEEE</h1>
      </div>
      <p>
        Το IEEE, ή το Ινστιτούτο Ηλεκτρολόγων και Ηλεκτρονικών Μηχανικών, είναι
        ο μεγαλύτερος τεχνικός επαγγελματικός οργανισμός στον κόσμο αφιερωμένος
        στην πρόοδο της τεχνολογίας προς όφελος της ανθρωπότητας.{" "}
      </p>
      <p>
        Η συμμετοχή στο IEEE προσφέρει πολλά οφέλη, όπως πρόσβαση σε έρευνα
        αιχμής, ευκαιρίες δικτύωσης με ομοϊδεάτες επαγγελματίες και πρόσβαση σε
        πολύτιμους εκπαιδευτικούς πόρους.
      </p>
      <div className="button-container">
        <a href="#about-us">Μάθε Περισσότερα</a>
      </div>
    </section>
  );
}

export default LandingPage;
