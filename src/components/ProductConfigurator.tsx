import { type CSSProperties, useMemo, useState } from 'react';
import {
  calculateConfigurationPrice,
  clawGapOptions,
  defaultProductConfiguration,
  fingerCountOptions,
  materialOptions,
  ProductConfiguration,
  ProductOption,
} from '../content/productConfiguration';
import { PlaceholderImage } from './PlaceholderImage';

type ProductConfiguratorProps = {
  onCheckout: () => void;
};

type OptionGroupProps = {
  legend: string;
  fieldName: keyof ProductConfiguration;
  options: ProductOption[];
  selectedOptionId: string;
  onChange: (fieldName: keyof ProductConfiguration, optionId: string) => void;
  showSwatches?: boolean;
};

function formatPriceDelta(priceDelta: number): string {
  if (priceDelta === 0) {
    return '$0';
  }

  return `+$${priceDelta}`;
}

function OptionGroup({
  legend,
  fieldName,
  options,
  selectedOptionId,
  onChange,
  showSwatches,
}: OptionGroupProps) {
  return (
    <fieldset className="option-group">
      <legend>{legend}</legend>
      {options.map((option) => (
        <label className="option-row" key={option.id}>
          <input
            checked={selectedOptionId === option.id}
            name={fieldName}
            type="radio"
            value={option.id}
            onChange={() => onChange(fieldName, option.id)}
          />
          {showSwatches && (
            <span
              className="option-swatch"
              style={{ '--swatch-color': option.swatch } as CSSProperties}
              aria-hidden="true"
            />
          )}
          <span className="option-copy">
            <span className="option-label">
              {option.label} <span>{formatPriceDelta(option.priceDelta)}</span>
            </span>
            {option.description && <span className="option-description">{option.description}</span>}
          </span>
        </label>
      ))}
    </fieldset>
  );
}

export function ProductConfigurator({ onCheckout }: ProductConfiguratorProps) {
  const [configuration, setConfiguration] = useState<ProductConfiguration>(
    defaultProductConfiguration,
  );

  const totalPrice = useMemo(
    () => calculateConfigurationPrice(configuration),
    [configuration],
  );

  function updateConfiguration(fieldName: keyof ProductConfiguration, optionId: string) {
    setConfiguration((currentConfiguration) => ({
      ...currentConfiguration,
      [fieldName]: optionId,
    }));
  }

  return (
    <section className="configurator-section" id="configure" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Configure</p>
        <h2>Build the claw that almost ships.</h2>
        <p>Choose finish, gap, and talon count with the confidence of a serious buyer.</p>
      </div>
      <div className="configurator-grid">
        <div className="configurator-gallery">
          <PlaceholderImage
            label="Product render placeholder"
            detail="OpenClaws object angle"
            variant="product"
          />
          <PlaceholderImage
            label="Demo photo placeholder"
            detail="Mac holder in use"
            variant="small"
          />
        </div>
        <div className="configurator-panel">
          <OptionGroup
            legend="Material"
            fieldName="materialId"
            options={materialOptions}
            selectedOptionId={configuration.materialId}
            onChange={updateConfiguration}
            showSwatches
          />
          <OptionGroup
            legend="Claw Gap"
            fieldName="clawGapId"
            options={clawGapOptions}
            selectedOptionId={configuration.clawGapId}
            onChange={updateConfiguration}
          />
          <OptionGroup
            legend="Finger Count"
            fieldName="fingerCountId"
            options={fingerCountOptions}
            selectedOptionId={configuration.fingerCountId}
            onChange={updateConfiguration}
          />
          <div className="purchase-row">
            <strong>${totalPrice}</strong>
            <div className="purchase-actions">
              <button className="secondary-button" type="button">
                Add to Cart
              </button>
              <button className="primary-button" type="button" onClick={onCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
