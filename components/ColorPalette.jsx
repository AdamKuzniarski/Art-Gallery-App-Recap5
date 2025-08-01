import Link from "next/link";
import styled from "styled-components";

export default function ColorPalette({ colors }) {
  return (
    <Colors>
      {colors.map((color) => (
        <ColorItem key={color} color={color} />
      ))}
    </Colors>
  );
}

const Colors = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const ColorItem = styled.li`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: ${(props) => props.color};
`;
