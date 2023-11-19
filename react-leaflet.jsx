// import { Component } from 'react';
// //import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import './css/react-leaflet.css';
// //import { MarkerIcon } from './react-leaflet-icon.js';

// /*Creamos un nuevo Marker para que cada vez que aparezca un
// nuevo marker, aparezca el popup*/
// /*
// const CustomMarker = props => {
//     const initMarker = ref => {
//         if (ref) {
//             //ref.leafletElement.openPopup()
//         }
//     }
//     return <Marker ref={initMarker} {...props}/>
// }
// */

// class MapView extends Component {

//     /*Función para capturar la latitud y la longitud*/
//     handleClick(e) {
//         this.setState({ currentLocation: e.latlng });
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             currentLocation: { lat: -34.6037389, lng: -58.4515704 },
//             zoom: 12,
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     render() {
//         const { currentLocation, zoom } = this.state;
//         return (
//             <MapContainer center={currentLocation} zoom={zoom} onClick={this.handleClick}>
//                 <TileLayer
//                     url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//                     attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//                 />
//             </MapContainer >
//         );
//     }
// }

// export default MapView;