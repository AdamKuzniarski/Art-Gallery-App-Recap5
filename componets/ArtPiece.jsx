import Image from "next/image";
export default function ArtPiece({ piece }) {
  return (
    <figure>
      <Image src={piece.imageSource} width={100} height={100} alt=""></Image>
      <figcaption>{piece.artist}</figcaption>
      <figcaption>{piece.name}</figcaption>
    </figure>
  );
}
