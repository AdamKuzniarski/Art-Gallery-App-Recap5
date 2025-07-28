import Image from "next/image";

export default function ArtPieceSpotLight({ piece }) {
  return (
    <figure>
      <Image src={piece.imageSource} width={300} height={300} alt="" />

      <figcaption>{piece.artist}</figcaption>
    </figure>
  );
}
