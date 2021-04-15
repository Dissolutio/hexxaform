import React from "react";
import styled from "styled-components";

import { MapHexStyles } from "./MapHexStyles";
import { ReactHexgrid } from "./ReactHexgrid";
import { ZoomControls } from "./ZoomControls";
import { MapHexes } from "./MapHexes";
import { useBgioG } from "bgio-contexts";

export const MapDisplay = () => {
  const { G } = useBgioG();
  const { hexMap } = G;
  const { mapSize, hexOrientation } = hexMap;
  //! MAP SETUP/LAYOUT CONFIG
  const flat = hexOrientation === "flat";
  const hexSize =
    mapSize <= 3 ? 15 : mapSize <= 5 ? 20 : mapSize <= 10 ? 25 : 25;
  const initialMapState = {
    width: 100,
    height: 100,
    origin: { x: 0, y: 0 },
    flat,
    spacing: 0.99,
  };
  const [mapState, setMapState] = React.useState(() => initialMapState);

  //! ZOOM FEATURE
  const mapRef = React.useRef();
  const zoomInterval = 100;
  // increases width and height by zoom interval, attempts scroll correction afterwards
  const handleClickZoomIn = () => {
    const el = mapRef.current;
    setMapState((mapState) => ({
      ...mapState,
      width: mapState.width + zoomInterval,
      height: mapState.height + zoomInterval,
    }));
    if (el) {
      setTimeout(() => {
        const el: any = mapRef.current;
        el && el.scrollBy(2 * zoomInterval, 2 * zoomInterval);
      }, 1);
    }
  };
  // decreases width and height by zoom interval, attempts scroll correction afterwards
  const handleClickZoomOut = () => {
    const el: any = mapRef.current;
    setMapState((s) => ({
      ...s,
      width: s.width - zoomInterval,
      height: s.height - zoomInterval,
    }));
    el && el.scrollBy(-2 * zoomInterval, -2 * zoomInterval);
  };

  return (
    <MapStyle>
      <ZoomControls
        handleClickZoomIn={handleClickZoomIn}
        handleClickZoomOut={handleClickZoomOut}
      />
      <MapHexStyles hexSize={hexSize} ref={mapRef}>
        <ReactHexgrid
          mapSize={mapSize}
          hexSize={hexSize}
          width={`${mapState.width}%`}
          height={`${mapState.height}%`}
          flat={mapState.flat}
          spacing={mapState.spacing}
          origin={mapState.origin}
        >
          <MapHexes hexSize={hexSize} />
        </ReactHexgrid>
      </MapHexStyles>
    </MapStyle>
  );
};

const MapStyle = styled.div`
  height: 100%;
  transform-style: preserve-3d;
`;
