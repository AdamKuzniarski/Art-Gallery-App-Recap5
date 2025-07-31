import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

//Rendern die Komponenten auf der Webseite(das zufällig generierte Bild)
export default function ArtPieceSpotLight({
  piece,
  favorites,
  onToggleFavorite,
}) {
  return (
    <FigureCard>
      <Image src={piece.imageSource} width={300} height={300} alt={piece.name} />

      <figcaption>{piece.artist}</figcaption>

      <FavoriteButton
      
        piece={piece}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      ></FavoriteButton>
    </FigureCard>
  );
}
const FigureCard = styled("figure")`
  margin-top: 10px;
  position: relative;
  border: 20px solid #344056;
  border-radius: 10px;
  width: 80vw;
  max-width: 350px;
  box-shadow: 5px 4px 5px rgba(43, 45, 44, 0.7);

  
  figcaption {
    background-color: #345644;
    color: #e0e0e0;
    padding: 0.5rem 0.7rem;
    margin-top: -4px; //Hack!

    p {
      font-size: 1.1rem;
      font-weight: bold;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;
