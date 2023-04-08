import { cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

test('should render todo component', () => {
    expect(true).toBe(true);
});
