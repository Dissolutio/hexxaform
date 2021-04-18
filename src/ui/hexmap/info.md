`MapDisplay`: is the component that houses everything. It holds state for the map's current proportions, passes that data to ReactHexgrid which outputs the hexgrid usage.
`ReactHexgrid`: just a lil react17-hexgrid wrapper/abstraction
`MapZoomControls`: floats in map display, is passed handlers for changing map width and height.
`TurnCounter`: keeping as template for floating data display
