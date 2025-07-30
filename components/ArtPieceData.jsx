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
}) {
  const [comments, setComments] = useState([]);

  function handleAddComment(newComment) {
    setComments([...comments, newComment]);
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
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      <ArtPieceForm onAddComment={handleAddComment} />
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
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
`;