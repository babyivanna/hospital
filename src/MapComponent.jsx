import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: "relative",
          height: "32vh"
        }}
      >
        <Map initialCenter={{ lat: 56.9996588, lng: 40.9863145 }} style={{}} google={this.props.google} zoom={18}>
          <Marker
            onClick={this.onMarkerClick}
            name={"Крутая больничка в ИГХТУ!"}
            title={"Приходите, вас точно вылечат!"}
            position={{lat: 56.9996588, lng: 40.9863145}}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <h2>{this.state.selectedPlace.title}</h2>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDCzx9WLcvw7k76s9K2h5FguMtX3EcYaSY",
  v: "3.30"
})(MapContainer);
