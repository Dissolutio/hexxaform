import React, { useEffect } from "react";

import styled from "styled-components";

import { useBgioG } from "../bgio-contexts/useBgioG";
import { MapHexes } from "./MapHexes";
import { MapHexStyles } from "./MapHexStyles";
import { MapControlButtons } from "./MapControlButtons";
import { MapShapes } from "../../game/types";
import { Layout } from "react-hexgrid";

type Props = {
  printRef: React.RefObject<HTMLDivElement>;
};

export const MapDisplay = ({ printRef }: Props) => {
  const { G } = useBgioG();
  // const printRef = React.useRef<HTMLDivElement>(null);
  const { hexMap } = G;
  const { hexSize, mapSize, flat, mapShape, mapId } = hexMap;

  //! MAP SETUP/LAYOUT CONFIG
  const isHexagonShapedMap = mapShape === MapShapes.hexagon;
  const isRectangleShapedMap = mapShape === MapShapes.rectangle;
  const isOrientedRectangleShapedMap = mapShape === MapShapes.orientedRectangle;
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
  // this works ok if the longer number is the length, and around 25 length/width, otherwise, it's off screen easily
  const orientedRectangularMapState = {
    width: 100,
    height: 100,
    origin: { x: -750, y: -500 },
    flat,
    spacing: 0.99,
  };
  const initialMapState = isHexagonShapedMap
    ? hexagonalMapState
    : isRectangleShapedMap
    ? rectangularMapState
    : orientedRectangularMapState;
  const [mapState, setMapState] = React.useState(() => initialMapState);
  const recalculateMapState = () => setMapState(initialMapState);
  useEffect(() => {
    recalculateMapState();
  }, [mapId]);

  const htmlIdMapControls = "hidemeZoom";

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
  function calcViewBox(mapSize: number) {
    const xyMin = mapSize * -50;
    const xyLength = mapSize * 100;
    return `${xyMin} ${xyMin} ${xyLength} ${xyLength}`;
  }
  return (
    <MapStyle>
      <MapControlButtons
        printRef={printRef}
        htmlId={htmlIdMapControls}
        handleClickZoomIn={handleClickZoomIn}
        handleClickZoomOut={handleClickZoomOut}
      />
      <MapHexStyles
        hexSize={hexSize}
        mapZoomScalePercentage={mapZoomScalePercentage}
      >
        <svg
          width={`${mapState.width}%`}
          height={`${mapState.height}%`}
          viewBox={calcViewBox(mapSize)}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Layout
            size={{ x: hexSize, y: hexSize }}
            flat={mapState.flat}
            origin={mapState.origin}
            spacing={mapState.spacing}
          >
            <MapHexes hexSize={hexSize} />
          </Layout>
        </svg>
      </MapHexStyles>
    </MapStyle>
  );
};

const MapStyle = styled.div`
  height: 100%;
`;
