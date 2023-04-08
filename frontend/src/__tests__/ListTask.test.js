import { cleanup } from "@testing-library/react";
import { API_URL } from '../Globals';
import { LinkTask } from '../components/ListTask';

afterEach(() => {
    cleanup();
});

describe('ListTask', () => {
    const tasks = [
        { id: 1, name: "do something", completed: false },
        { id: 2, name: "do something2", completed: false },
        { id: 3, name: "do something3", completed: false },
    ]

    it('do somthing', () => {
        expect(true).toBe(true);
        
    });
});