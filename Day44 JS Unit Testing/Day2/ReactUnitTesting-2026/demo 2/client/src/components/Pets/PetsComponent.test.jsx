import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { fireEvent, render, screen } from "@testing-library/react";
import mockedCats from "../../mocks/cats.json";
import Pets from "./Pets";
const server = setupServer(
  http.get("http://localhost:4000/cats", () => {
    return HttpResponse.json(mockedCats, { status: 200 });
  })
);
describe("Test Pets Component", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("Initial Render", async () => {
    render(<Pets />);
    let catCards=await screen.findAllByRole("article");
    expect(catCards.length).toBe(5)
  });
  test('Test after Gender Filter',async()=>{
    render(<Pets />);
    let catCards=await screen.findAllByRole("article");
    fireEvent.change(screen.getByLabelText(/Gender/i),{target:{value:'male'}})
    expect(screen.getAllByRole('article').length).toBe(2)
    expect(screen.getAllByRole('article')).toStrictEqual([catCards[1],catCards[3]])
  })
  test("Test after Favorite Filter", async () => {
      render(<Pets />);
  
      let catCards = await screen.findAllByRole("article");
  
      // favoured only
      fireEvent.change(screen.getByLabelText(/Favourite/i), {
        target: { value: "favoured" },
      });
  
      expect(screen.getAllByRole("article").length).toBe(2);
  
      expect(screen.getAllByRole("article")).toStrictEqual([
        catCards[0],
        catCards[1],
      ]);
  
      // not favoured only
      fireEvent.change(screen.getByLabelText(/Favourite/i), {
        target: { value: "not favoured" },
      });
  
      expect(screen.getAllByRole("article").length).toBe(3);
  
      expect(screen.getAllByRole("article")).toStrictEqual([
        catCards[2],
        catCards[3],
        catCards[4],
      ]);
    });
});
