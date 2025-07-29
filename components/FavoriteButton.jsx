import styled from "styled-components";

export default function FavoriteButton({ piece, onToggleFavorite, favorites }) {
  return (
    <FavButton
      onClick={(event) => {
        event.preventDefault();
        return onToggleFavorite(piece.slug);
      }}
    >
      {favorites.includes(piece?.slug) ? "❤️" : "🩶"}
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
