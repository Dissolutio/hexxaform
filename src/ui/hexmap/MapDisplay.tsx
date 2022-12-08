import React, { useEffect } from "react";

import styled from "styled-components";

import { useBgioG } from "../bgio-contexts/useBgioG";
import { MapHexes } from "./MapHexes";
import { MapHexStyles } from "./MapHexStyles";
import { MapControlButtons } from "./MapControlButtons";
import { MapShapes } from "../../game/types";
import { Layout } from "./Layout";

type Props = {
  printRef: React.RefObject<HTMLDivElement>;
};

export const MapDisplay = ({ printRef }: Props) => {
  const { G } = useBgioG();
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
    // when the map changes, we recalculate, no other times
  }, [mapId]);

  const htmlIdMapControls = "hidemeZoom";

  //! ZOOM FEATURE
  const zoomInterval = 10;
  const handleClickZoomIn = () => {
    // increases width and height by zoom interval, attempts scroll correction afterwards
    const el = printRef.current;
    setMapState((mapState) => ({
      ...mapState,
      width: mapState.width + zoomInterval,
      height: mapState.height + zoomInterval,
    }));
    el && el.scrollTo({ left: 50, top: 50 });
  };
  const handleClickZoomOut = () => {
    // decreases width and height by zoom interval, attempts scroll correction afterwards
    const el = printRef.current;
    setMapState((s) => ({
      ...s,
      width: s.width - zoomInterval,
      height: s.height - zoomInterval,
    }));
    el && el.scrollTo({ left: -50, top: -50 });
  };
  function calcViewBox(mapSize: number) {
    const contentWidth = window.outerWidth;
    console.log(
      "🚀 ~ file: MapDisplay.tsx:82 ~ calcViewBox ~ contentWidth",
      contentWidth
    );
    const contentHeight = window.outerHeight * 0.6;
    console.log(
      "🚀 ~ file: MapDisplay.tsx:84 ~ calcViewBox ~ contentHeight",
      contentHeight
    );
    const xyMin = mapSize * -40;
    const xyLength = mapSize * 100;
    const result = `${xyMin} ${xyMin} ${xyLength} ${xyLength}`;
    console.log(
      "🚀 ~ file: MapDisplay.tsx:81 ~ calcViewBox ~ mapSize",
      mapSize,
      { result: result }
    );
    return result;
  }
  return (
    <MapHexStyles hexSize={hexSize}>
      <MapControlButtons
        printRef={printRef}
        htmlId={htmlIdMapControls}
        handleClickZoomIn={handleClickZoomIn}
        handleClickZoomOut={handleClickZoomOut}
      />
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
          className="hexgrid-layout"
        >
          <MapHexes hexSize={hexSize} />
        </Layout>
      </svg>
    </MapHexStyles>
  );
};
