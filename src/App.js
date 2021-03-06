import "./App.css";
import React from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import './App.css';

class App extends React.Component {
  state = {
    viewport: {
      latitude: 40.7250863,
      longitude: -73.9773600,
      zoom: 0
    }
  };

  myMap = React.createRef();

  render() {
    console.log(this.state.viewport)
    return (
      <div>
        <ReactMapGL
          ref={this.myMap}
          {...this.state.viewport}
          width="50vw"
          height="50vh"
          onViewportChange={viewport => this.setState({ viewport })}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken="pk.eyJ1IjoibG1zc3IiLCJhIjoiY2swNnF6eGRqMzNodDNpcWR2MTN1Y2pnZSJ9.-Cdm2-HPW8myBQjzq3AO4Q"
        >
          <Geocoder
            mapRef={this.myMap}
            mapboxApiAccessToken="pk.eyJ1IjoibG1zc3IiLCJhIjoiY2swNnF6eGRqMzNodDNpcWR2MTN1Y2pnZSJ9.-Cdm2-HPW8myBQjzq3AO4Q"
            />
          <GeolocateControl />
          <NavigationControl showCompass={false} showZoom={false}/>
        </ReactMapGL>
        <form>
          <label>
          Distance :
          <input type="integer" name="name" />
          </label>
          <input type="submit" value="Create a route" />
        </form>
      </div>
      )
  }
}


export default App;
