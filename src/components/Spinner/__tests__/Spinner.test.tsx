import { render } from '@testing-library/react';
import Spinner from '..';

describe('Spinner', () => {
  test('Should render Spinner container and loader', () => {
    const { container } = render(<Spinner />);
    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();
  });

  test('Should apply custom width and height styles', () => {
    const { container } = render(<Spinner width={60} height={60} />);
    const loader = container.querySelector('.loader') as HTMLElement;
    expect(loader.style.width).toBe('60px');
    expect(loader.style.height).toBe('60px');
  });

  test('Should apply fullScreen class when fullScreen prop is true', () => {
    const { container } = render(<Spinner fullScreen />);
    const spinnerContainer = container.querySelector('.fullScreen');
    expect(spinnerContainer).toBeInTheDocument();
  });
});
