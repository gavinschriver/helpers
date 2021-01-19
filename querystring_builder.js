/** return a string built from passing in an object
 * prepended with ? ; adds <key>=<value> for each kv pair in object; separates kvs in string with "&" character, omitted after last kv pair
 *   
 * @param {Object} filters Object with key/value pairs of a (k) relevant querystring param name and (v) matching value
 * Will only add the pair if the 'value' is not 0
 * 
 * example:
 * 
 * buildQueryString({name: "gavo", year: 2000, dontAddThis: 0})
 * // returns '?name=gavo&year=2000'
 * 
 * 
 */
export const buildQueryString = (filters) => {
    const filtersArray = Object.entries(filters);
    let querystring = "?";
    filtersArray.forEach((filter) => {
      if (filter[1] !== 0) {
        querystring += `${filter[0]}=${filter[1]}&`;
      }
    });
    if (querystring.endsWith("&")) {
      querystring = querystring.slice(0, -1);
    }
    return querystring
  }