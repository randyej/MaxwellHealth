import axios from 'axios';
import Q from 'q';

import { config } from './../config/config.json';

const SOURCE_BASE_URL = config.newsApi.sourcesBaseUrl;

const SourceService = {

  getSources(category = '', language = 'en', country = 'us') {
    let deferred = Q.defer();
    axios.get(SOURCE_BASE_URL, {
      params: {
        category: category,
        language: language,
        country: country
      }
    })
    .then(function(response) {
      //console.log(response.data);
      deferred.resolve(response.data.sources);
    })
    .catch(function(error) {
      const errorOrData = error.response ? error.response.data : error;
      console.log(`[FAIL] getSources( ) ${JSON.stringify(errorOrData)}`);
      deferred.reject(errorOrData);
    });
    return deferred.promise;
  }

};

export default SourceService;
