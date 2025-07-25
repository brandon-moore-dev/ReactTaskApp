import React from "react";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import Home from "../routes/home.jsx";

vi.mock("axios");

describe("Homepage - ReadMe", () => {
  it("Fetches ReadMe and renders", async () => {
    const mockReadMe = "React Task List";

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockReadMe })
    );
    render(<Home />);
    expect(await screen.findByText(mockReadMe)).toBeInTheDocument();
  });

  it("Fetches ReadMe and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    render(<Home />);
    expect(await screen.findByText(/Something went wrong/)).toBeInTheDocument();
  });
});
