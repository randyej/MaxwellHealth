import React, { Component, PropTypes } from 'react';
import {
  Nav,
  NavItem,
} from 'react-bootstrap';

import './SourceList.css';

class SourceList extends Component {

  render() {
    const sources = this.props.sources;

    return (
      <div className="SourceList">
        <Nav bsStyle="pills"
          stacked
          activeKey={this.props.selectedSourceId}
          onSelect={this.props.onNavSelectSource}
        >
        {
          sources.map((source) => this.renderSourceNavItem(source))
        }
        </Nav>
      </div>
    );
  }

  renderSourceNavItem(source) {
    return (
      <NavItem className="source-navitem" key={source.id} eventKey={source.id}>
        <div className="source-icon">
          <img src={source.urlsToLogos.small} alt={source.name} />
        </div>
        <div className="source-name">
          {source.name}
        </div>
        <div className="source-category">
          (Category: {source.category})
        </div>
      </NavItem>
    );
  }

}

// SourceList.defaultProps = {
//   someProp: someValue,
// };

SourceList.propTypes = {
  sources: PropTypes.array.isRequired,
  selectedSource: PropTypes.object.isRequired,
  selectedSourceId: PropTypes.string.isRequired,
  onNavSelectSource: PropTypes.func.isRequired
};

export default SourceList;
