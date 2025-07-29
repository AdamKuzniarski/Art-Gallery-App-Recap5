import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

export default function ArtPieceDetails({
  artPieceData,
  piece,
  onToggleFavorite,
  favorites,
}) {
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
        ></FavoriteButton>
      </FigureCard>
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
