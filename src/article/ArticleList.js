import React, { Component, PropTypes } from 'react';
import {
  Nav,
  NavItem,
} from 'react-bootstrap';

import './ArticleList.css';

class ArticleList extends Component {

  render() {
    const articles = this.props.articles;

    return (
      <div className="ArticleList">
        <Nav bsStyle="pills"
          stacked
          activeKey={this.props.selectedArticleId}
          onSelect={this.props.onNavSelectArticle}
        >
        {
          articles.map((article) => this.renderArticleNavItem(article))
        }
        </Nav>
      </div>
    );
  }

  renderArticleNavItem(article) {
    return (
      <NavItem className="article-navitem" key={article.id} eventKey={article.id}>
        <div className="article-icon">
          <img src={article.urlToImage} alt={article.name} />
        </div>
        <div className="article-title">
          {article.title}
        </div>
        <div className="article-author">
          {article.author}
        </div>
        <div className="article-published">
          {article.publishedAt}
        </div>
      </NavItem>
    );
  }

}

// ArticleList.defaultProps = {
//   someProp: someValue,
// };

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  selectedArticle: PropTypes.object.isRequired,
  selectedArticleId: PropTypes.string.isRequired,
  onNavSelectArticle: PropTypes.func.isRequired
};

export default ArticleList;
