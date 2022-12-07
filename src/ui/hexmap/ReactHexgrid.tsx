import React from "react";
import { HexGrid, Layout } from "react-hexgrid";

type ReactHexgridProps = {
  children?: any;
  mapSize: number;
  width: string | number;
  height: string | number;
  className?: string;
  flat?: boolean;
  origin?: { x: number; y: number };
  hexSize: number;
  spacing: number;
};
export const ReactHexgrid = ({
  children,
  mapSize = 1,
  width,
  height,
  className,
  flat,
  origin,
  hexSize,
  spacing,
}: ReactHexgridProps) => {
  function calcViewBox(mapSize: number) {
    const xyMin = mapSize * -50;
    const xyLength = mapSize * 100;
    return `${xyMin} ${xyMin} ${xyLength} ${xyLength}`;
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox={calcViewBox(mapSize)}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Layout
        className={className}
        size={{ x: hexSize, y: hexSize }}
        flat={flat}
        origin={origin}
        spacing={spacing}
      >
        {children}
      </Layout>
    </svg>
  );
};
