import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App.jsx";
import CommentArea from "../components/CommentArea.jsx";

describe("testiamo applicazione", () => {
  it("renders welcome", () => {
    render(<App />);
    expect(screen.getByText(/Benvenuto su EpiBooks!/i)).toBeInTheDocument();
  });

  it("renders cards with links", () => {
    render(<App />);
    const links = screen.getAllByRole("link", { name: /Mostra dettagli/i });
    console.log("Trovati link:", links.length);
    expect(links.length).toBeGreaterThan(1);
  });
  it("renders comment area", () => {
    render(<CommentArea />);
    expect(screen.getByText(/Aggiungi una recensione:/i)).toBeInTheDocument();
  });
});
