import React from "react";
import PropTypes from "prop-types";

/**
 * Formats the global information
 * @returns A div with a picto image, title and unit.
 */

/**
 * @function keyDataElement
 * @description to render the KEY_PERFORMANCE_INDICATOR
 * @param { object } props - the props of the keyDataElement
 * @param { string } secondaryClassName
 * @param { String } picto - Image's picto
 * @param { String } alt - Image's description
 * @param { String } label - Image's label
 * @param { number } value - Value of the keyDataElement
 * @param { string } unit - Value's unit of the keyDataElement
 * @returns { HTMLElement }
 */
function keyDataElement(props) {
  const { secondaryClassName, picto, alt, label, value, unit } = props;

  return (
    <div className={`sideInformationsContainer`}>
      <div className={`logoInformationCount ${secondaryClassName}`}>
        <img src={picto} alt={alt} aria-label={label}></img>
      </div>
      <div className="textInformationCount">
        <span>
          {value}
          {unit}
        </span>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default keyDataElement;

keyDataElement.propTypes = {
  picto: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};
