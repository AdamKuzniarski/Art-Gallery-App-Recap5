import { render, screen } from "@testing-library/react";
import ArtPieceSpotLight from "../ArtPieceSpotlight";



const piece = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#C53B4B", "#B8CDA8", "#D5D5D5", "#53545B", "#9B8E6C"],
  dimensions: { height: 2432, width: 1920, type: "jpg" },
};

test("renders the art piece image, artist, and favorite button", () => {
  render(
    <ArtPieceSpotLight
      piece={piece}
      favorites={[]}
      onToggleFavorite={() => {}}
    />
  );

  const image = screen.getByRole("img", {
    name: /Orange Red and Green Abstract Painting/i,
  });
  expect(image).toBeInTheDocument();

  const artist = screen.getByText(/Steve Johnson/i);
  expect(artist).toBeInTheDocument();

  const favoriteButton = screen.getByRole("button");
  expect(favoriteButton).toBeInTheDocument();
});

