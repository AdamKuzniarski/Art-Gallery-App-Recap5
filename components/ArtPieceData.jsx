import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";
import ArtPieceForm from "./ArtPieceForm";
import { useState } from "react";
import ColorPalette from "./ColorPalette";
import ArrowLeft from "@/assets/arrow-left.svg";

export default function ArtPieceDetails({
  artPieceData,
  piece,
  onToggleFavorite,
  favorites,
  onAddComment, // die Props von Kommentar
  artPiecesInfo,
}) {
  // Modifiziert, Die Kommentare für ein Künstwerk aus dem globelen Stare holen
  const { comments = [] } =
    (artPiecesInfo && artPiecesInfo[artPieceData.slug]) || {};

  //Modifiziert, die Funktion, die an das Formular übergeben wird
  function handleSubmitComment(formData) {
    const newComment = {
      text: formData.comment,
      timestamp: new Date().toLocaleString(),
    };
    onAddComment(artPieceData.slug, newComment);
  }
  return (
    <DetailsContainer>
      <BackButton as="a" href="/overview">
        <ArrowLeft /> Back To Galery
      </BackButton>

      <FigureCard>
        <Image src={artPieceData.imageSource} width={100} height={100} alt="" />

        <ColorPalette artPieceData={artPieceData} />

        <figcaption>{artPieceData.name}</figcaption>
        <figcaption>{artPieceData.artist}</figcaption>
        <figcaption>{artPieceData.year}</figcaption>
        <figcaption>{artPieceData.genre}</figcaption>

        <FavoriteButton
          piece={piece}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      </FigureCard>

      <div>
        <h3>Comments:</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
            <small>{comment.timestamp}</small>
          </div>
        ))}
      </div>

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
