# Current Work

## To add a pen mode

Update the `HexTerrains` enum and the `PenModes` enum, whereever you're keeping those these days.
In `move.ts` add a move to paint that mode, add that to the `moves` export.
In `useMapContext.tsx` add a toggleMode for that mode to set the penMode state (and add it to the ctx value AND the types for the ctx value)
In `MapHexes.tsx` `onClickBoardHex` handler add a condition for the new pen mode and use the new paint move when condition is met.
In `Controls.tsx` add a button to toggle the pen mode.

# Styling Hexes

adding to how to calc class name, and then styling that class name, is an **UNMAINTAINABLE** system

# Icons

Used IcoMoon to update zoom controls and undo/redo controls. ?Moved the undo/redo to the map display, floating but closer to the bottom.

> Maybe lean towards IcoMoon, eh?
