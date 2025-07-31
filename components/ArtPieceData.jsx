import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";
import ArtPieceForm from "./ArtPieceForm";
import ColorPalette from "./ColorPalette";
import ArrowLeft from "@/assets/arrow-left.svg";

export default function ArtPieceDetails({
  artPieceData,
  piece,
  onToggleFavorite,
  favorites,
  onAddComment,
  artPiecesInfo,
}) {
  // Die Kommentare für ein spezifisches Kunstwerk aus dem State holen
  const { comments = [] } =
    (artPiecesInfo && artPiecesInfo[artPieceData.slug]) || {};

  // Die Funktion, die an das Formular übergeben wird
  function handleSubmitComment(formData) {
    const newComment = {
      id: crypto.randomUUID(),
      text: formData.comment,
      timestamp: new Date().toLocaleString(),
    };
    onAddComment(artPieceData.slug, newComment);
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
          piece={piece}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      </FigureCard>

      {/* 
      Anzeige der der Kommentare
    */}
      <div>
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <small>{comment.timestamp}</small>
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
