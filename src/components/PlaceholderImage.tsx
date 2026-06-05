type PlaceholderImageProps = {
  label: string;
  detail: string;
  variant?: 'hero' | 'wide' | 'small' | 'diagram' | 'product';
};

export function PlaceholderImage({ label, detail, variant = 'wide' }: PlaceholderImageProps) {
  return (
    <div className={`placeholder-image placeholder-image-${variant}`} role="img" aria-label={label}>
      <div className="placeholder-frame">
        <span>{label}</span>
        <strong>{detail}</strong>
      </div>
    </div>
  );
}
