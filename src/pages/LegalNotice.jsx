import { useEffect } from "react";

export default function LegalNotice() {
  useEffect(() => { document.title = "Legal Notice | Granite Bitcoin Advisors"; }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-3xl font-bold">Legal Notice</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Educational and Advisory Services</h2>
        <p>
          Granite Bitcoin is a knowledge and service-based business, providing advisory and educational
          services to individuals and businesses on best practices to secure and manage their bitcoin.
          Our services are designed to help clients utilize publicly available open-source hardware,
          software, and other resources to securely manage their Bitcoin assets.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">No Hardware or Software Sales</h2>
        <p>
          We do not sell or resell hardware or software. Any recommendations we provide are for publicly
          available, open-source solutions that clients may obtain directly from reputable vendors.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">No Financial Services</h2>
        <p>
          We are not a bank, financial institution, or investment advisor. We do not process or facilitate
          the purchase or sale of Bitcoin or any other assets. All financial transactions are the sole
          responsibility of the client, through their chosen platforms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Self-Custody Only</h2>
        <p>
          Our services promote a self-custody model, giving clients full control of their Bitcoin. We
          never hold, access, or store client funds or private keys.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Privacy</h2>
        <p>
          We are committed to protecting the confidentiality of client information and operate in a manner
          that respects and upholds privacy standards.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">KYC / AML</h2>
        <p>
          Because we never hold client funds or maintain control over transactions, we are not subject to
          KYC (Know Your Customer) or AML (Anti-Money Laundering) obligations. We do not collect personal
          identifying information from clients. To prevent misuse, we take a hands-off approach to
          lost-key recovery: we provide guidance, but clients remain solely responsible for the recovery
          process and for safeguarding their own assets.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Inquiries</h2>
        <p>
          For legal, compliance, or other questions, please contact us at{' '}
          <a href="mailto:contact@granitebitcoin.com" className="text-amber-600 underline">
            contact@granitebitcoin.com
          </a>.
        </p>
      </section>
    </div>
  );
}
