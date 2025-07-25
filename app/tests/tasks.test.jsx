import React from "react";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import Tasks from "../routes/tasks.jsx";

vi.mock("axios");

describe("Tasks", () => {
  it("Fetches Tasks and renders", async () => {
    const mockAxios = vi.mocked(axios.get);
    const mockTasks = {
      todos: [
        { id: 1, todo: "Read a book", completed: true, userId: 9 },
        { id: 2, todo: "Watch a movie", completed: false, userId: 12 },
      ],
    };
    mockAxios.mockResolvedValue({ data: mockTasks });
    render(<Tasks />);
    expect(await screen.findByText(/Read a book/)).toBeInTheDocument();
  });

  it("Fetches Tasks and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    render(<Tasks />);
    expect(await screen.findByText(/Something went wrong/)).toBeInTheDocument();
  });
});
