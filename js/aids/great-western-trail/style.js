import styled from 'styled-components';

export const SetupList = styled.div`
  margin: calc(.5*3mm) 0;
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3mm;
`;

export const SetupListRow = styled.div`
  display: flex;
  gap: 3mm;
`;

const Grid = styled.div`
  display: grid;
  gap: 3mm;
`;

export const Wrap = styled.div``;

export const PrivateBuildings = styled.div`
  width: calc(${({ $rttn }) => $rttn ? 5 : 4}*25mm);
  height: calc(3*25mm);
  margin: calc(-3mm/2);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * { flex: none; }

  ${Wrap} {
    flex-basis: 100%;
    height: 0;
  }
`;

export const NeutralBuildings = styled.div`
  width: calc(3 * 22mm + 2 * 3mm);
  height: calc(3 * 22mm + 2 * 3mm);
  position: relative;
  & > * { position: absolute; }
`;

export const NeutralBuildingGrid = styled(Grid)`
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: repeat(3, min-content);
  grid-template-areas:
    "g f ."
    "c d e"
    "b . a"
`;

export const Tile = styled.div`
  width: 22mm;
  height: 26mm;
  margin: calc(3mm/2);
`;

export const Town = styled(Tile)`
  height: 22mm;
`;

const Building = styled(Town)`
  margin: 0;
  border: .8mm solid black;
  border-radius: 3mm;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
`;

export const BuildingFlex = styled(Building)`
  margin: calc(3mm/2);
`;

export const BuildingCell = styled(Building)`
  grid-area: ${({ $area }) => $area};
`;

export const Rails = styled.div`
  width: calc(${({ $rttn }) => $rttn ? 8 : 5}*25mm);
  height: calc(${({ $rttn }) => $rttn ? 2 : 1}*29mm);
  margin: calc(-3mm/2);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;

  & > * { flex: none; }

  ${Wrap} {
    flex-basis: 100%;
    height: 0;
  }

  :nth-child(7 of ${Tile}) { order: 1; }
  :nth-child(-n+3 of ${Town}) { order: 1; }
`;

const TrailTiles = styled.div`
  margin: calc(-3mm/2);
  display: flex;
`;

export const TrailVerticalHazzards = styled(TrailTiles)`
  width: 25mm;
  flex-direction: column-reverse;
`;

export const TrailHorizontalHazzards = styled(TrailTiles)`
  height: 29mm;
  flex-direction: row-reverse;
`;

export const TrailBandits = styled(TrailTiles)`
  width: calc(4*25mm);
  flex-wrap: wrap;
  align-content: end;
`;

export const Trail = styled(Grid)`
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    "d b r"
    "d f r";
  :nth-child(1 of ${TrailVerticalHazzards}) { grid-area: d; }
  :nth-child(2 of ${TrailVerticalHazzards}) { grid-area: r; }
  & > ${TrailHorizontalHazzards} { grid-area: f; }
  & > ${TrailBandits} { grid-area: b; }
`;

const BagTileColumns = styled.div`
  margin: calc(-3mm/2);
  width: calc(3*25mm);
  display: flex;
  flex-wrap: wrap;
`;

export const InitialMarket = styled(BagTileColumns)`
  width: calc(${({ $count }) => $count}*25mm);
  border-bottom: 1px solid black;
`;

export const Foresight = styled(BagTileColumns)`
  flex-direction: row-reverse;
`;
