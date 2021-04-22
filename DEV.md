# Current Work

MAP 3 Holds what is now the Giant's Table file. The map + startzones added for players 0-1

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
