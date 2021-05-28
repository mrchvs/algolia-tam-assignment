import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure } from 'instantsearch.js/es/widgets';

// Autocomplete Template
import autocompleteProductTemplate from '../templates/autocomplete-product';
// import autocompleteSuggestionTemplate from '../templates/suggestion-template';


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
    this._pushData();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      'P5YMD8MJI4',
      'ed49be94305500291e81b05cd38eb982'
    );

    this._searchInstance = instantsearch({
      indexName: 'tam_assignment2',
      searchClient: this._searchClient,
    });
  }

  /**
   * @private
   * Imports data from products.json to Algolia
   * @return {void}
   */
  _pushData() {
    const products = require('../../data/products.json');
    const index = this._searchClient.initIndex('tam_assignment2');

    index
      .saveObjects(products, {
        autoGenerateObjectIDIfNotExist: true,
      })
      .then(({ objectIDs }) => {
        // eslint-disable-next-line no-console
        console.log(objectIDs);
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
        hitsPerPage: 3,
      }),
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#autocomplete-hits',
        templates: { item: autocompleteProductTemplate },
      }),
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
