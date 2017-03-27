import axios from 'axios';
import Q from 'q';

import { config } from './../config/config.json';

const ARTICLE_BASE_URL = config.newsApi.articlesBaseUrl;
const API_KEY = config.newsApi.apiKey;

const ArticleService = {

  getArticles(sourceId /*required*/, sortBy = 'top') {
    let deferred = Q.defer();
    axios.get(ARTICLE_BASE_URL, {
      params: {
        source: sourceId,
        apiKey: API_KEY,
        sortBy: sortBy
      }
    })
    .then(function(response) {
      // add an ID for each article before resolving...
      response.data.articles.forEach(function(currentValue, index, array) {
        currentValue.id = ''+index;
      });
      //console.log(response.data);
      deferred.resolve(response.data.articles);
    })
    .catch(function(error) {
      const errorOrData = error.response ? error.response.data : error;
      console.log(`[FAIL] getArticles( ) ${JSON.stringify(errorOrData)}`);
      deferred.reject(errorOrData);
    });
    return deferred.promise;
  }

};

export default ArticleService;
