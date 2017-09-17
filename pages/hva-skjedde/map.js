import { compose, withProps, withState, withHandlers } from 'recompose';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  OverlayView,
} from 'react-google-maps';

const getImage = index => {
  switch (index) {
    case 1:
      return 'https://render.bitstrips.com/v2/cpanel/9188364-282889003_2-s4-v1.png?transparent=1&palette=1';
    case 2:
      return 'https://render.bitstrips.com/v2/cpanel/10219614-282889003_2-s4-v1.png?transparent=1&palette=1';
    case 3:
      return '';
    case 4:
      return 'https://render.bitstrips.com/v2/cpanel/10221787-282889003_2-s4-v1.png?transparent=1&palette=1';
    case 4:
      return 'https://render.bitstrips.com/v2/cpanel/9188364-282889003_2-s4-v1.png?transparent=1&palette=1';
    case 5:
      return 'https://render.bitstrips.com/v2/cpanel/9941851-282889003_2-s4-v1.png?transparent=1&palette=1';
    case 6:
      return 'https://render.bitstrips.com/v2/cpanel/10223090-282889003_2-s4-v1.png?transparent=1&palette=1';
    case 7:
      return 'https://render.bitstrips.com/v2/cpanel/10079856-282889003_2-s4-v1.png?transparent=1&palette=1';
    default:
      return '';
  }
};

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});
const API_KEY = 'AIzaSyA8v_smYnlz0BpENop-L-LNGIPAOJNbNa4';
const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 14),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      },
    };
  }),
  withScriptjs,
  withGoogleMap,
)(props => {
  console.log(props);
  return (
    <GoogleMap
      defaultCenter={{ lat: 59.909, lng: 10.75 }}
      zoom={props.zoom}
      ref={props.onMapMounted}
      onZoomChanged={props.onZoomChanged}
    >
      {props.places &&
        props.places.map((place, index) => {
          const p = place.place;
          console.log(p);
          return (
            <OverlayView
              position={{ lat: p.location.lat, lng: p.location.lon }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              getPixelPositionOffset={getPixelPositionOffset}
              key={`${JSON.stringify({
                lat: p.location.lat,
                lng: p.location.lon,
              })}-${index}`}
            >
              <div>
                <p>
                  {index}: {p.name || 'Ukjent sted'}
                </p>
                <img className="w4 h4" src={getImage(index)} />
              </div>
            </OverlayView>
          );
        })}
    </GoogleMap>
  );
});

// <Marker position={{ lat: 59.9, lng: 10.7 }} >

// </Marker>

export default MapWithControlledZoom;
