import { Component } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/react-leaflet.css';
import { NavBar } from './NavBar';

class MapView extends Component {
  handleClick(e) {
    this.setState({ currentLocation: e.latlng });
  }

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: -34.6037389, lng: -58.4515704 },
      zoom: 12,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <MapContainer center={currentLocation} zoom={zoom} onClick={this.handleClick} zoomControl={false}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Agrega el control de zoom manual */}
        <ZoomControl position="topright" />
      </MapContainer>
    );
  }
}

export const AlertasPantalla = () => {
  return (
    <>
      <NavBar />
      <MapView />
    </>
  );
};
