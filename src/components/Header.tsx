import { navigationItems } from '../content/productPageContent';

type HeaderProps = {
  onBuyClick: () => void;
};

export function Header({ onBuyClick }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="OpenClaws home">
        <span className="brand-mark" aria-hidden="true">
          OC
        </span>
        <span>OpenClaws</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className="header-buy-button" type="button" onClick={onBuyClick}>
        Buy
      </button>
    </header>
  );
}
