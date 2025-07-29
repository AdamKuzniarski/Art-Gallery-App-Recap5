import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

test("renders navigation links", () => {
  render(<Navbar />);

  const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
  expect(spotlightLink).toBeInTheDocument();
  expect(spotlightLink).toHaveAttribute("href", "/");

  const galleryLink = screen.getByRole("link", { name: /gallery/i });
  expect(galleryLink).toBeInTheDocument();
  expect(galleryLink).toHaveAttribute("href", "/overview");

  const favoritesLink = screen.getByRole("link", { name: /favorites/i });
  expect(favoritesLink).toBeInTheDocument();
  expect(favoritesLink).toHaveAttribute("href", "/favorites");
});
