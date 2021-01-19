/** return a string built from passing in an object
 * @param {Object} filters Object with k/v pairs of a relevant querystring param name and matching value; will only add the pair if the 'value' is not 0
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