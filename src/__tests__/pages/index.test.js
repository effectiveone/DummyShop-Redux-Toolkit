import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import Navbar from "../components/Header/Navbar/Navbar"
import HomePage from '../../pages/index';

describe('HomePage', () => {
    it('should render the heading', () => {
        const textToFind = 'HOT DEAL THIS WEEK';

        render(<HomePage />);
        const heading = screen.getByText(textToFind);

        expect(heading).toBeInTheDocument();
    });
    it('should render the heading', () => {
        const textToFind = '10';

        render(<Navbar />);
        const heading = screen.getByText(textToFind);
   
        const heading = screen.getByText(textToFind);

        expect(heading).not.toBeInTheDocument();
    });

    it('should render the heading', () => {
        const textToFind = '10';

        render(<HomePage />);
        const element = screen.getByTestId('addToCardBTN')
        fireEvent.click(element);
        fireEvent.click(element);
        fireEvent.click(element);
        fireEvent.click(element);
        fireEvent.click(element);
        fireEvent.click(element);
        fireEvent.click(element);
        fireEvent.click(element);
        fireEvent.click(element);
        fireEvent.click(element);
      
        expect(element).toHaveBeenCalledTimes(10);
    });
});

