import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas en <GifItem />', () => {
    const title = 'One Punch';
    const url = 'https://onepunch.com/Saitam.jpg'

    test('Debe de hacer match con el snapshoot', () => {
        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />);

        // screen.debug();

        const { src, alt } = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
    })

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);


        expect(screen.getByText(title)).toBeTruthy();
    })

})