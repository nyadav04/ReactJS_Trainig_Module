import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greetings";

describe('Greeting component', () => {
    
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />);
        //Act
        //...nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "Changed!!" if the button was clicked', () =>{
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText('Changed!!');
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "It\'s good to practice" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.queryByText('It\'s good to practiceIttesting', {exact: false});
        expect(outputElement).toBeNull();
    })

});
