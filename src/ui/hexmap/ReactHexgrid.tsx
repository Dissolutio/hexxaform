import React from "react";
import { Hexgrid, HexgridLayout, Point } from "react17-hexgrid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type ReactHexgridProps = {
  children?: React.ReactNode;
  mapSize: number;
  width: string | number;
  height: string | number;
  className?: string;
  flat?: boolean;
  origin?: Point;
  hexSize?: number;
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
    <TransformWrapper>
      <TransformComponent
       wrapperStyle={{
        width:'100%',
        height: '100%'
      }}
      contentStyle={{
        width: '100%',
        height: '100%'
      }}
      >
        <Hexgrid width={width} height={height} viewBox={calcViewBox(mapSize)}>
          <HexgridLayout
            className={className}
            size={{ x: hexSize, y: hexSize }}
            flat={flat}
            origin={origin}
            spacing={spacing}
          >
            {children}
          </HexgridLayout>
        </Hexgrid>
      </TransformComponent>
    </TransformWrapper>
  );
};
