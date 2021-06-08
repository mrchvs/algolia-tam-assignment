import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure, index } from 'instantsearch.js/es/widgets';

// Autocomplete Template
import autocompleteProductTemplate from '../templates/autocomplete-product';

const appId = 'P5YMD8MJI4';
const apiKey = 'ed49be94305500291e81b05cd38eb982';
const searchClient = algoliasearch(appId, apiKey);

/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = searchClient;

    this._searchInstance = instantsearch({
      indexName: 'tam_assignment2',
      searchClient: this._searchClient,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      configure({
        hitsPerPage: 5,
      }),

      searchBox({
        container: '#searchbox',
      }),
      // Products
      hits({
        container: '#autocomplete-hits',
        templates: { item: autocompleteProductTemplate },
      }),
      // Suggestions
      index({ indexName: 'tam_assignment2_query_suggestions' }).addWidgets([
        configure({ hitsPerPage: 3 }),
        hits({
          container: '#suggestions',
          templates: {
            item:
              '<div>{{#helpers.highlight}}{ "attribute": "query" }{{/helpers.highlight}}</div>',
          },
        }),
      ]),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default Autocomplete;
