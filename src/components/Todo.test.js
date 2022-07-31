import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import props from './Form';
import Todo from './Todo'

describe("rendering basic element of Todo Component", () => {
    it("should have Delete button", () => {
        const { getByText } = render(<Todo />);
        expect(getByText("Delete")).toBeDefined();
    })
    it("should have Edit button", () => {
        const { getByText } = render(<Todo />);
        expect(getByText("Edit")).toBeDefined();
    })
    it("should have checkbox ", () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("checkboxid")).toBeDefined();
    })
})

describe("checking functionality of the form", () => {
    it("checking the checkbox", () => {
        const { getByTestId } = render(<Todo />)
        const checkbox = getByTestId("checkboxid")
        fireEvent.change(checkbox, { "target": { "defaultChecked": true } })
        expect(checkbox).toBeChecked()
    })
    it("checking the Edit button", () => {
        const { getByTestId } = render(<Todo />)
        const edit = getByTestId("editid")
        fireEvent.click(edit)
        expect(getByTestId("newname")).toBeDefined()
    })
    it("checking the Cancel button", () => {
        const { getByTestId } = render(<Todo />)
        const edit = getByTestId("editid")
        fireEvent.click(edit)
        expect(getByTestId("newname")).toBeDefined()
        fireEvent.click(getByTestId("cancelid"))
        expect(edit).toBeDefined()


    })
})

