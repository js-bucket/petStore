import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { PetsDashBoard } from '../pages/dashboard/PetsDashBoard';

let mockGetPets = [{
    category: {},
    id: 12,
    name: "white",
    photoUrls: ['https://irko-ingur.ru/thumb/2/CjW1zeDt5rlzue4SyUFFMQ/r/d/iork.jpg'],
    status: "available",
}];

jest.mock('../hooks/usePets', () => ({
    __esModule: true,
    default: () => ({ 
        getPets: jest.fn(() => {}),
        petsState: {
            pets: mockGetPets,
        }
    }),
}));

describe('Dashboard', () => {
    it('should contain pet name', async() => {
        render(<PetsDashBoard />);
        await waitFor(() => {
            screen.getByText('white');
        });
    });
});