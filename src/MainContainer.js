import React, { Component } from 'react';
import { find } from 'lodash';

import SourceService from './source/SourceService';
import SourceList from './source/SourceList';

import ArticleService from './article/ArticleService';
import ArticleList from './article/ArticleList';
import ArticleDetail from './article/ArticleDetail';

import './MainContainer.css';

class MainContainer extends Component {

  constructor() {
    super();

    this.state = {
      // sources stuff
      sources: [],
      selectedSource: {},
      selectedSourceId: '',

      // articles stuff
      articles: [],
      selectedArticle: {},
      selectedArticleId: ''
    };

    this.handleNavSelectSource = this.handleNavSelectSource.bind(this);
    this.handleNavSelectArticle = this.handleNavSelectArticle.bind(this);

  }

  componentDidMount() {
    this.getSources();
  }

  async getSources() {
    try {
      const sources = await SourceService.getSources();
      this.setState({sources: sources});
      if(sources.length > 0) {
        this.handleNavSelectSource(sources[0].id);
      }
    }
    catch (errorOrData) {
      // TODO error dialog maybe?
    }
  }

  handleNavSelectSource(eventKey) {
    // selected source Object & ID
    const sources = this.state.sources;
    const foundSource = find(sources, (source) => source.id === eventKey);
    this.setState({
      selectedSource: foundSource,
      selectedSourceId: eventKey
    });
    this.getArticles(eventKey);
  }

  async getArticles(selectedSourceId) {
    //const selectedSourceId = this.state.selectedSourceId;
    try {
      const articles = await ArticleService.getArticles(selectedSourceId);
      this.setState({articles: articles});
      if(articles.length > 0) {
        this.handleNavSelectArticle(articles[0].id);
      }
    }
    catch (errorOrData) {
      // TODO error dialog maybe?
    }
  }

  handleNavSelectArticle(eventKey) {
    // selected article Object & ID
    const articles = this.state.articles;
    const foundArticle = find(articles, (article) => article.id === eventKey);
    this.setState({
      selectedArticle: foundArticle,
      selectedArticleId: eventKey
    });
  }

  render() {
    return (
      <div className="MainContainer">
        <SourceList 
          sources={this.state.sources}
          selectedSource={this.state.selectedSource}
          selectedSourceId={this.state.selectedSourceId}
          onNavSelectSource={this.handleNavSelectSource}
        />
        <ArticleList
          articles={this.state.articles}
          selectedArticle={this.state.selectedArticle}
          selectedArticleId={this.state.selectedArticleId}
          onNavSelectArticle={this.handleNavSelectArticle}
        />
        <ArticleDetail article={this.state.selectedArticle} />
      </div>
    );
  }

}

export default MainContainer;
