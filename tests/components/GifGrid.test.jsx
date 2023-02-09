import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading incial', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);


        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    });

    test('Debe de mostrar items de las images  ', () => {
        const gifts = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http//localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http//localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifts,
            isLoading: false,
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    })

});