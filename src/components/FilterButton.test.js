import { render, screen } from '@testing-library/react';
import FilterButton from './FilterButton';

describe("Checking the basic element of Filter Butoon", () => {
    it("should have filter button", () => {
        const { getByTestId } = render(<FilterButton />);
        expect(getByTestId("filterButton")).toBeDefined();
    });
    it("should have filter button as not disabled", () => {
        const { getByTestId } = render(<FilterButton />);
        expect(getByTestId("filterButton")).not.toBeDisabled();
    });


});