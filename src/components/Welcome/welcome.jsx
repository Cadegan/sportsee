import React from "react";
import PropTypes from "prop-types";

/**
 * The function WelCome displays a sentence with the name of the user.
 * @returns A React component
 */
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
        <span role="img" aria-label="acclaim">
          👏
        </span>
      </p>
    </section>
  );
}

export default WelCome;

WelCome.propTypes = {
  firstName: PropTypes.string.isRequired,
};
