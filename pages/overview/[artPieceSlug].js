import { useRouter } from "next/router";
import Head from "next/head";
import ArtPieceForm from "@/components/ArtPieceForm";
import FavoriteButton from "@/components/FavoriteButton";
import ColorPalette from "@/components/ColorPalette";
import Image from "next/image";
import ArrowLeft from "@/assets/arrow-left.svg";
import Link from "next/link";
import Comments from "@/components/Comments";
import styled from "styled-components";

//Variable artPieceData wählt eine spezifische Seite aus (Slug)
// <Head> Komponente setzt den Title der Seite
export default function ArtDetails({
  artPieces,
  onToggleFavorite,
  isArtPieceFavorite,
  onAddComment,
  comments,
}) {
  const router = useRouter();
  const { artPieceSlug } = router.query;

  const artPieceData = artPieces.find((piece) => piece.slug === artPieceSlug);
  const artPieceComments = comments.filter(
    (comment) => comment.artPieceSlug === artPieceSlug
  );

  if (!artPieceData) {
    return <p>Loading art piece...</p>;
  }

  function handleSubmitComment(data) {
    onAddComment(artPieceData.slug, data.comment);
  }

  return (
    <>
      <Head>
        <title>Artwork-Details &bull; Art Gallery</title>
      </Head>

      {/* Aufruf der Komponente für die Details des Bildes */}
      <DetailsContainer>
        {/* 
           Back-Button zur Übersicht
         */}
        <BackLink href="/overview">
          <ArrowLeft /> Back To Gallery
        </BackLink>

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
          <ColorPalette colors={artPieceData.colors} />

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
        <Comments comments={artPieceComments} />
        {/* 
           Formular zur Eingabe der Kommentare
         */}
        <ArtPieceForm onSubmit={handleSubmitComment} />
      </DetailsContainer>
    </>
  );
}

const FigureCard = styled.figure`
  position: relative;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
`;

const BackLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:visited {
    color: inherit;
  }
`;
