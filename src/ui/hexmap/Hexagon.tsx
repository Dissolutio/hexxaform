import * as React from "react";
import classNames from "classnames";
import { Hex, HexUtils } from "react-hexgrid";
import { useLayoutContext } from "react-hexgrid/lib/Layout";

type HexagonProps = {
  q: number;
  r: number;
  s: number;
  data?: any;
  onClick?: HexagonMouseEventHandler;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
};

type H = { data?: any; state: { hex: Hex }; props: HexagonProps };

export type HexagonMouseEventHandler = (
  event: React.MouseEvent<SVGGElement, MouseEvent>,
  h: H
) => void;

/**
 * Renders a Hexagon cell at the given rqs-based coordinates.
 */
export function Hexagon(props: HexagonProps) {
  const { q, r, s, data, onClick, className, children } = props;
  const { layout, points } = useLayoutContext();
  const { hex, pixel } = React.useMemo(() => {
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);
    return {
      hex,
      pixel,
    };
  }, [q, r, s, layout]);

  const state = { hex };

  return (
    <g
      className={classNames("hexagon-group", className)}
      transform={`translate(${pixel.x}, ${pixel.y})`}
      onClick={(e) => {
        if (onClick) {
          onClick(e, { data, state, props });
        }
      }}
    >
      <g className="hexagon">
        <polygon points={points} />
        {children}
      </g>
    </g>
  );
}

export default Hexagon;
