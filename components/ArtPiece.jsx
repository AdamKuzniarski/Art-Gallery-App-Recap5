import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

// Vom Array - übergeben wir die Daten für die Kunstwerke(Image piece.imageSource ...)
// <Image> Tag brauch zusätzliche Konfigurationen um die externe Bilder-Quellen einzubinden
// <FavoriteButton> Tag wird hinzugefügt mit Funktionalität
export default function ArtPiece({ piece, onToggleFavorite, isFavorite }) {
  return (
    <FigureCard>
      <Image
        src={piece.imageSource}
        width={350}
        height={200}
        alt={piece.name}
      />
      <FigureCardCaption>{piece.artist}</FigureCardCaption>
      <FigureCardCaption>{piece.name}</FigureCardCaption>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(piece.slug)}
      />
    </FigureCard>
  );
}

const FigureCard = styled.figure`
  position: relative;
  border: 1px solid green;
  margin-top: 20px;
  border-radius: 7px;
  width: 60vw;
  max-width: 350px;
`;

const FigureCardCaption = styled.figcaption`
  background-color: #35425a;
  color: #f1ecec;
  padding: 0.5rem 0.7rem;
  //entfernt die Lücken zwischen figcaption und Bild
  margin-top: -4px; //Hack!
`;
