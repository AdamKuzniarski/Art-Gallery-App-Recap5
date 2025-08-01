import styled from "styled-components";

//
export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return (
    <FavButton
      onClick={(event) => {
        event.preventDefault(); // beschränkt das Klick-Event auf dem FavButton, sonst Weiterleitung auf Detail-Seite
        onToggleFavorite();
      }}
    >
      {isFavorite ? "❤️" : "🩶"}
    </FavButton>
  );
}

const FavButton = styled("button")`
  position: absolute;
  font-size: 25px;
  top: 0.7rem;
  right: 0.7rem;
  width: 48px;
  height: 48px;
  background-color: #ffffffbe;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
`;
