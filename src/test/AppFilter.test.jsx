import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "../App";

beforeEach(() => {
  vi.spyOn(global, "fetch").mockResolvedValue({
    json: async () => [
      { asin: "111", title: "Fondazione di Asimov" },
      { asin: "222", title: "It di Stephen King" },
    ],
  });
});

describe("Filtro libri tramite Navbar", () => {
  it("filtra per titolo digitato nella ricerca", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/cerca il tuo libro/i);
    fireEvent.change(input, { target: { value: "asimov" } });

    const links = await waitFor(() =>
      screen.getAllByRole("link", { name: /Mostra dettagli/i })
    );

    expect(links.length).toBeGreaterThan(0);
    expect(screen.getByText(/asimov/i)).toBeInTheDocument();
  });
});
