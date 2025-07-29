import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";
import ArtPieceForm from "./ArtPieceForm";
import { useState } from "react";

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
    <>
      <Link href="/overview">Back To Galery</Link>

      <FigureCard>
        <Image src={artPieceData.imageSource} width={100} height={100} alt="" />

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
          <div key={index} >
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      <ArtPieceForm onAddComment={handleAddComment} />
    </>
  );
}

const FigureCard = styled("figure")`
  position: relative;
  width: 30%;
  height: auto;

  p {
    color: white;
  }
`;



