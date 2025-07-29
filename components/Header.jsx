import styled from "styled-components";

export default function Header() {
  return <MainHeader>Art Gallery</MainHeader>;
}

const MainHeader = styled("header")`
  display: flex;  
  justify-content: center;
  position: sticky;
  top: 0;
  padding: 0.5rem 0 0.7rem;
  background-color: var(--navbar-hover-color);
  color: #e0e0e0;
  font-size: 36px;
  z-index: 100;
`;
