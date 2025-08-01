import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";
import ArtPieceForm from "./ArtPieceForm";
import ColorPalette from "./ColorPalette";
import ArrowLeft from "@/assets/arrow-left.svg";

export default function ArtPieceDetails({
  artPieceData,
  comments,
  onToggleFavorite,
  isArtPieceFavorite,
  onAddComment,
}) {
  function handleSubmitComment(data) {
    onAddComment(artPieceData.slug, data.comment);
  }

  return (
    <DetailsContainer>
      {/* 
      Back-Button zur Übersicht
    */}
      <BackButton as="a" href="/overview">
        <ArrowLeft /> Back To Gallery
      </BackButton>

      {/* 
      Bild 
    */}
      <FigureCard>
        <Image
          src={artPieceData.imageSource}
          width={100}
          height={100}
          alt={artPieceData.name}
        />

        {/* 
      Anzeige der Farbpalette 
    */}
        <ColorPalette artPieceData={artPieceData} />

        {/* 
      Detailinformationen zum Bild 
    */}
        <figcaption>{artPieceData.name}</figcaption>
        <figcaption>{artPieceData.artist}</figcaption>
        <figcaption>{artPieceData.year}</figcaption>
        <figcaption>{artPieceData.genre}</figcaption>

        {/* 
      Favorite Button für die Detail-Anzeige
    */}
        <FavoriteButton
          isFavorite={isArtPieceFavorite(artPieceData.slug)}
          onToggleFavorite={() => onToggleFavorite(artPieceData.slug)}
        />
      </FigureCard>

      {/* 
      Anzeige der der Kommentare
    */}
      <div>
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <small>{comment.createdAt}</small>
          </div>
        ))}
      </div>

      {/* 
      Formular zur Eingabe der Kommentare
    */}
      <ArtPieceForm onAddComment={handleSubmitComment} />
    </DetailsContainer>
  );
}

const FigureCard = styled("figure")`
  position: relative;
`;

const DetailsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
`;

const BackButton = styled("li")`
  display: flex;
  gap: 0.5em;
  color: #201f1f;
  font-size: 1.1rem;
  text-decoration: none;
`;
