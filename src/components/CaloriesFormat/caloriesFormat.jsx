/**
 * It takes a number as an argument and returns a formatted number
 */
const numberFormat = (value) => new Intl.NumberFormat("en-IN").format(value);

export default numberFormat;
