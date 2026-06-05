import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../src/App';
import {
  calculateConfigurationPrice,
  defaultProductConfiguration,
} from '../src/content/productConfiguration';

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
});
