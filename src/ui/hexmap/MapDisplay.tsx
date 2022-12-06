import React from "react";

import styled from "styled-components";

import { useBgioG } from "../bgio-contexts";
import { MapZoomControls } from "./MapZoomControls";
import { ExportMapAsImgButton } from "./ExportMapAsImgButton";
import { UndoRedo } from "./UndoRedo";
import { ReactHexgrid } from "./ReactHexgrid";
import { MapHexes } from "./MapHexes";
import { MapHexStyles } from "./MapHexStyles";
import { UpDownAltitudeViewerButtons } from "./UpDownAltitudeViewerButtons";

type Props = {
  printRef: React.RefObject<HTMLDivElement>;
};

export const MapDisplay = ({ printRef }: Props) => {
  const { G } = useBgioG();
  // const printRef = React.useRef<HTMLDivElement>(null);
  const { hexMap } = G;
  const { hexSize, mapSize, flat, mapShape } = hexMap;

  //! MAP SETUP/LAYOUT CONFIG
  const isHexagonShapedMap = mapShape === "hexagon";
  const hexagonalMapState = {
    width: 100,
    height: 100,
    origin: { x: 0, y: 0 },
    flat,
    spacing: 0.99,
  };
  const rectangularMapState = {
    width: 100,
    height: 100,
    origin: { x: -750, y: -500 },
    flat,
    spacing: 0.99,
  };
  const initialMapState = isHexagonShapedMap
    ? hexagonalMapState
    : rectangularMapState;
  const [mapState, setMapState] = React.useState(() => initialMapState);

  const [mapZoomScalePercentage, setMapZoomScalePercentage] =
    React.useState<number>(100);

  const zoomScalePercentInterval = 20;
  // const handleClickZoomIn = () => {
  //   setMapZoomScalePercentage(s => (s + zoomScalePercentInterval))
  // }
  // const handleClickZoomOut = () => {
  //   setMapZoomScalePercentage(s => (s - zoomScalePercentInterval))
  // }

  //! ZOOM FEATURE
  const mapRef = React.useRef<HTMLDivElement>(null);
  const zoomInterval = 10;
  // increases width and height by zoom interval, attempts scroll correction afterwards
  const handleClickZoomIn = () => {
    const el = mapRef.current;
    setMapState((mapState) => ({
      ...mapState,
      width: mapState.width + zoomInterval,
      height: mapState.height + zoomInterval,
    }));
    // el && el.scrollBy(2 * zoomInterval, 2 * zoomInterval);
    el && el.scrollTo({ left: 50, top: 50 });
    setMapZoomScalePercentage((s) => s + zoomScalePercentInterval);
  };
  // decreases width and height by zoom interval, attempts scroll correction afterwards
  const handleClickZoomOut = () => {
    setMapState((s) => ({
      ...s,
      width: s.width - zoomInterval,
      height: s.height - zoomInterval,
    }));
    // el && el.scrollBy(-2 * zoomInterval, -2 * zoomInterval);
    setMapZoomScalePercentage((s) => s - zoomScalePercentInterval);
  };
  const htmlIdPhotoButton = "hidemePhoto";
  const htmlIdZoomButtons = "hidemeZoom";
  const htmlIdUndoRedoButtons = "hidemeUndoRedo";
  const htmlIdAltitudeButtons = "hidemeAltitude";
  return (
    <MapStyle>
      <ExportMapAsImgButton
        printRef={printRef}
        htmlIdPhotoButton={htmlIdPhotoButton}
        htmlIdZoomButtons={htmlIdZoomButtons}
        htmlIdUndoRedoButtons={htmlIdUndoRedoButtons}
        htmlIdAltitudeButtons={htmlIdAltitudeButtons}
        imgType="jpg"
      />
      <MapZoomControls
        htmlId={htmlIdZoomButtons}
        handleClickZoomIn={handleClickZoomIn}
        handleClickZoomOut={handleClickZoomOut}
      />
      <UndoRedo htmlId={htmlIdUndoRedoButtons} />
      <UpDownAltitudeViewerButtons htmlId={htmlIdAltitudeButtons} />
      <MapHexStyles
        ref={mapRef}
        hexSize={hexSize}
        mapZoomScalePercentage={mapZoomScalePercentage}
      >
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
`;
