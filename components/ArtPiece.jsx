import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

// Vom Array - übergeben wir die Daten für die Kunstwerke(Image piece.imageSource ...)
// <Image> Tag brauch zusätzliche Konfigurationen um die externe Bilder-Quellen einzubinden
// <FavoriteButton> Tag wird hinzugefügt mit Funktionalität
export default function ArtPiece({ piece, onToggleFavorite, favorites }) {
  return (
    <FigureCard>
      <Image
        src={piece.imageSource}
        width={350}
        height={200}
        alt={piece.name}
      ></Image>
      <figcaption>{piece.artist}</figcaption>
      <figcaption>{piece.name}</figcaption>
      <FavoriteButton
        piece={piece}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      ></FavoriteButton>
    </FigureCard>
  );
}

const FigureCard = styled("figure")`
  position: relative;
  border: 1px solid green;
  margin-top: 20px;
  border-radius: 7px;
  width: 60vw;
  max-width: 350px;

  figcaption {
    background-color: #35425a;
    color: #f1ecec;
    padding: 0.5rem 0.7rem;
    //entfernt die Lücken zwischen figcaption und Bild
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
