import React, { Component } from "react";

class BokehPlot extends Component {
  state = {
    loading: false,
    error: false
  };
  renderPlot() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else if (this.state.error) {
      return <h2>Error</h2>;
    } else {
      return <div id="myplot"></div>;
    }
  }
  async componentWillMount() {
    this.setState({
      loading: true
    });
    try {
      const response = await fetch(
        "https://amnxuwl6l1.execute-api.us-east-1.amazonaws.com/dev/myplot"
      );
      const item = await response.json();
      this.setState({
        loading: false
      });
      // eslint-disable-next-line
      Bokeh.embed.embed_item(item);
    } catch {
      this.setState({
        loading: false,
        error: true
      });
    }
  }
  render() {
    return <div>{this.renderPlot()}</div>;
  }
}

export default BokehPlot;
