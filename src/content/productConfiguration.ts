export type ProductConfiguration = {
  materialId: string;
  clawGapId: string;
  fingerCountId: string;
};

export type ProductOption = {
  id: string;
  label: string;
  priceDelta: number;
  description?: string;
  swatch?: string;
};

export const baseProductPrice = 199;

export const materialOptions: ProductOption[] = [
  {
    id: 'silver',
    label: 'Silver',
    priceDelta: 0,
    description: 'Clean machined aluminum finish.',
    swatch: '#d8d5cf',
  },
  {
    id: 'space-gray',
    label: 'Space Gray',
    priceDelta: 0,
    description: 'Quiet graphite tone for darker desk setups.',
    swatch: '#7c7d7b',
  },
  {
    id: 'midnight',
    label: 'Midnight',
    priceDelta: 20,
    description: 'Deep anodized finish for maximum seriousness.',
    swatch: '#17202a',
  },
];

export const clawGapOptions: ProductOption[] = [
  {
    id: 'standard-12',
    label: 'Standard 12.5mm',
    priceDelta: 0,
    description: 'Balanced airflow for ordinary background drama.',
  },
  {
    id: 'pro-15',
    label: 'Pro 15mm',
    priceDelta: 10,
    description: 'More opening for agents with larger ambitions.',
  },
  {
    id: 'custom',
    label: 'Custom',
    priceDelta: 30,
    description: 'Precision selected by committee.',
  },
];

export const fingerCountOptions: ProductOption[] = [
  {
    id: 'three-talon',
    label: '3-Talon',
    priceDelta: 0,
    description: 'Minimal grip for restrained setups.',
  },
  {
    id: 'five-talon',
    label: '5-Talon',
    priceDelta: 10,
    description: 'Additional grip with tasteful confidence.',
  },
  {
    id: 'seven-talon',
    label: '7-Talon',
    priceDelta: 20,
    description: 'Maximum contact for uninterrupted absence.',
  },
];

export const defaultProductConfiguration: ProductConfiguration = {
  materialId: 'silver',
  clawGapId: 'standard-12',
  fingerCountId: 'three-talon',
};

const optionGroups = [materialOptions, clawGapOptions, fingerCountOptions];

export function calculateConfigurationPrice(configuration: ProductConfiguration): number {
  const selectedOptionIds = new Set([
    configuration.materialId,
    configuration.clawGapId,
    configuration.fingerCountId,
  ]);

  return optionGroups
    .flat()
    .filter((option) => selectedOptionIds.has(option.id))
    .reduce((totalPrice, option) => totalPrice + option.priceDelta, baseProductPrice);
}
