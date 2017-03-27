import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

import './ArticleDetail.css';

class ArticleDetail extends Component {

  componentDidMount() {
    //this.loadArticleUrl();
  }

  componentDidUpdate() {
    //this.loadArticleUrl();
  }

  loadArticleUrl() {
    const article = this.props.article;
    if(!article.url) {
      return;
    }
    const articleIFrameDomNode = findDOMNode(this.refs.articleIFrame);
    const articleIFrameJQ = $(articleIFrameDomNode);
    articleIFrameJQ.load(article.url);
  }

  render() {
    const article = this.props.article;

    return (
      <div className="ArticleDetail">
        <div className="article-icon">
          <img src={article.urlToImage} alt={article.name} />
        </div>
        <div className="article-title">
          {article.title}
        </div>
        <div className="article-author-published">
          Author: {article.author}, Published: {article.publishedAt}
        </div>
        <div className="article-url">
          <a href={article.url} target="_blank">Foiled by CORS again! Click HERE to open the original eh...</a>
        </div>
      </div>
    );
  }

  /*render() {
    const article = this.props.article;

    return (
      <div className="ArticleDetail">
        <iframe className="article-iframe" frameBorder="0" src={article.url} />
      </div>
    );
  }*/

  /*render() {
    const article = this.props.article;

    return (
      <div className="ArticleDetail">
        <object className="article-iframe" type="text/html" data={article.url} />
      </div>
    );
  }*/

  /*render() {
    return(
      <div className="ArticleDetail">
        <div id="articleIFrame" ref="articleIFrame" className="article-iframe">
        </div>
      </div>
    );
  }*/

}

// ArticleDetail.defaultProps = {
//   someProp: someValue,
// };

ArticleDetail.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleDetail;
