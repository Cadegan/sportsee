/**
 * @description takes a number as an argument and returns a formatted number X.XXX
 * @function numberFormat
 * @param  { number } value
 * @return a formatted number
 */
const numberFormat = (value) => new Intl.NumberFormat("en-IN").format(value);

export default numberFormat;
