import Link from "next/link";
import Image from "next/image";

export default function ArtPieceDetails({ artPieceData }) {
  return (
    <>
      <Link href="/overview">Back To Galery</Link>

      <p>{artPieceData.name}</p>
      <p>{artPieceData.artist}</p>
      <p>{artPieceData.year}</p>
      <p>{artPieceData.genre}</p>

      <Image src={artPieceData.imageSource} width={100} height={100} alt="" />
    </>
  );
}
