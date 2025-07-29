import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <MainNav>
      <LinkList>
        <LinkItem>
          <Link href="/">Spotlight</Link>
        </LinkItem>

        <LinkItem>
          <Link href="/overview">Gallery</Link>
        </LinkItem>

        <LinkItem>
          <Link href="/favorites">Favorites</Link>
        </LinkItem>
      </LinkList>
    </MainNav>
  );
}

const MainNav = styled("nav")`
  position: sticky;
  bottom: 0;
`;

const LinkList = styled("ul")`
  display: flex;
  background-color: var(--navbar-bg-color);
  font-size: 24px;
`;

const LinkItem = styled("li")`
  flex: 1 0 auto;
  list-style-type: none;
  border-right: 1px solid rgb(99, 99, 99);

  &:last-child {
    border-right: none;
  }

  a {
    display: grid;
    place-content: center;
    padding: 0.9rem 0 0.7rem;
    color: #e0e0e0;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover, &:focus, &.active {
      background-color: var(--navbar-hover-color);
      cursor: pointer;
    }
  }
`;
