import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./App";
import { render, cleanup, waitForElement, fireEvent } from "react-testing-library";
afterEach(cleanup);

it("renders welcome message", () => {
  const { getByText } = render(<AppWrapper />);
  expect(getByText("Dazola")).toBeInTheDocument();
});

it("show products and product detail", async () => {
  const { getByText, container, getByTestId } = render(<AppWrapper />);
  fireEvent.click(getByText("Products"));

  await waitForElement(() => container.querySelector(".product-item"));
  const firstItemInList = container.querySelector(".product-item a");
  const testId = firstItemInList.getAttribute("data-testid");
  const productName = getByTestId("product-name").title;

  // => GO TO PD DETAIL PAGE
  fireEvent.click(getByTestId(testId));

  await waitForElement(() => getByText("Mua"));

  expect(getByText(productName)).toBeInTheDocument();
});
