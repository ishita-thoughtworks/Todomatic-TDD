import { render, screen } from '@testing-library/react';
import App from "./App"


describe("Checking the basic element of Filter Butoon", () => {

    it("should have a heading as Todomatic", () => {
        const { getByText } = render(<App />)
        expect(getByText("TodoMatic")).toBeDefined()

    })

    it("should have Input", () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("formInput")).toBeDefined();
    })
    it("should have Form", () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("newItemForm")).toBeDefined();
    })
    it("should have All filter button", () => {
        const { getByText } = render(<App />);
        expect(getByText("All")).toBeDefined();
    })
    it("should have All filter button", () => {
        const { getByText } = render(<App />);
        expect(getByText("Completed")).toBeDefined();
    })
    it("should have All filter button", () => {
        const { getByText } = render(<App />);
        expect(getByText("Active")).toBeDefined();
    })



});