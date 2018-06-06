import React, { Component } from 'react';
import GoogleMapsContainer from './GoogleMaps.container';

class GoogleMapsComponent extends Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 2000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <GoogleMapsContainer
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        currentPosition={this.props.currentPosition}
        getMarkerPosition={this.props.getMarkerPosition}
      />
    )
  }
}

export default GoogleMapsComponent;
