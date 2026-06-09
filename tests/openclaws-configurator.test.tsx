import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from '../src/App';
import {
  calculateConfigurationPrice,
  defaultProductConfiguration,
} from '../src/content/productConfiguration';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('OpenClaws product configuration', () => {
  it('calculates the base configuration price', () => {
    expect(calculateConfigurationPrice(defaultProductConfiguration)).toBe(199);
  });

  it('adds option prices for upgraded configurations', () => {
    expect(
      calculateConfigurationPrice({
        materialId: 'midnight',
        clawGapId: 'pro-15',
        fingerCountId: 'seven-talon',
      }),
    ).toBe(249);
  });
});

describe('OpenClaws checkout action', () => {
  it('opens a professional unavailable checkout dialog', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /checkout/i }));

    expect(
      screen.getByRole('heading', { name: /checkout is not fully implemented yet/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/no payment has been processed/i)).toBeInTheDocument();
  });

  it('scrolls the top pre-order button to the configurator without opening checkout', () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /pre-order now/i }));

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    expect(
      screen.queryByRole('heading', { name: /checkout is not fully implemented yet/i }),
    ).not.toBeInTheDocument();
  });
});

describe('OpenClaws benefit layout', () => {
  it('renders the benefit trio only once', () => {
    render(<App />);

    expect(screen.getAllByText('Run non-stop')).toHaveLength(1);
    expect(screen.getAllByText('Stays cool')).toHaveLength(1);
    expect(screen.getAllByText('Secure hold')).toHaveLength(1);
  });
});

describe('OpenClaws hero layout', () => {
  it('places hero copy over the media placeholder', () => {
    render(<App />);

    const heroHeading = screen.getByRole('heading', { name: /keep your agents running 24\/7/i });

    expect(heroHeading.closest('.hero-media')).toBeInTheDocument();
  });
});
