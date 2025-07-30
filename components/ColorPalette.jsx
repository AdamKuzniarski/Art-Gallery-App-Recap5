import styled from "styled-components";

export default function ColorPalette({ artPieceData }) {
  return (
    <Colors>
      <span style={{ backgroundColor: artPieceData.colors[0] }}></span>
      <span style={{ backgroundColor: artPieceData.colors[1] }}></span>
      <span style={{ backgroundColor: artPieceData.colors[2] }}></span>
      <span style={{ backgroundColor: artPieceData.colors[3] }}></span>
      <span style={{ backgroundColor: artPieceData.colors[4] }}></span>
    </Colors>
  );
}

const Colors = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  & > span {
   width: 32px;
  height: 32px;
  border-radius: 50%;
  }
`;


