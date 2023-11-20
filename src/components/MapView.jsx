import { Component } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/react-leaflet.css';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: -34.6037389, lng: -58.4515704 },
      zoom: 12,
      mostrarGrilla: false,  // Agrega el estado mostrarGrilla al componente MapView
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ currentLocation: e.latlng });
  }

  render() {
    const { currentLocation, zoom, mostrarGrilla } = this.state;
    return (
      <div className={`map-view ${mostrarGrilla ? 'hidden' : ''}`}>
        <MapContainer center={currentLocation} zoom={zoom} onClick={this.handleClick} zoomControl={false}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <ZoomControl position="topright" />
        </MapContainer>
      </div>
    );
  }
}

export default MapView;
