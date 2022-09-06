import React from "react";

function WelCome({ firstName }) {
  return (
    <section className="welComeMessage">
      <div className="welComeFirstName">
        <p>
          Bonjour <span className="firstName">{firstName}</span>
        </p>
      </div>
      <p className="congratulations">
        Félicitation ! Vous avez explosé vos objectifs hier{" "}
        <span role="img" aria-label="donut">
          👏
        </span>
      </p>
    </section>
  );
}

export default WelCome;
