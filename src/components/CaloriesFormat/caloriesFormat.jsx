/**
 * It takes a number as an argument and returns a formatted number X.XXX
 */
const numberFormat = (value) => new Intl.NumberFormat("en-IN").format(value);

export default numberFormat;
