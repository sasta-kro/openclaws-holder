type CheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section
        className="checkout-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
      >
        <p className="eyebrow">Pre-order status</p>
        <h2 id="checkout-modal-title">Checkout is not fully implemented yet.</h2>
        <p>
          This page is a fictional product showcase. No payment has been processed, no order has
          been placed, and no precision claw will ship.
        </p>
        <p>
          Future checkout work will connect to a small payment service boundary after official
          provider documentation has been verified.
        </p>
        <button className="primary-button" type="button" onClick={onClose}>
          Return to configuration
        </button>
      </section>
    </div>
  );
}
