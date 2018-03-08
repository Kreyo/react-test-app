import React from 'react';
import widgetsMock from '../../../mocks/data.json';
import { renderWidgets } from '../utils';

class WidgetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: [],
    };
  }

  componentWillMount() {
    this.setState({
      widgets: widgetsMock.widgets,
    });
  }

  render() {
    return (
      <div className="widgets-container">
        { renderWidgets(this.state.widgets) }
      </div>
    );
  }
}

module.exports = WidgetsContainer;
