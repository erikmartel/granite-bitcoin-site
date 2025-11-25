import { useEffect } from "react";
import { Helmet } from "react-helmet-async";


export default function Privacy() {
  useEffect(() => { document.title = "Privacy Policy | Granite Bitcoin Advisors"; }, []);
    return (
        <>
    <Helmet>
            <title>Privacy Policy for Granite Bitcoin Advisors</title>
            <meta
              name="description"
              content="Privacy Policy for Granite Bitcoin Advisors"
            />
            <link rel="canonical" href="https://granitebitcoin.com/privacy" />
          </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p>
          Granite Bitcoin Advisors (“Company,” “we,” “our,” or “us”) respects your privacy and is committed
          to protecting your personal information. This Privacy Policy explains how we collect, use, and
          safeguard your information when you interact with our website (granitebitcoin.com) or our
          services (“Services”). We encourage you to review our Terms of Services for more information
          about our online terms and policies in general.
        </p>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            During the course of our business activities and providing our services, we may collect the
            following types of information:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Direct Information:</strong> Name, email address, phone number, and other details
              you provide during interactions with us, such as submitting forms, signing up for services,
              or communicating with support.
            </li>
            <li>
              <strong>Cookies and Related Technologies:</strong> Our website may use cookies and similar
              technologies to collect basic technical data such as IP address, browser type, device
              information, and usage statistics to analyze traffic and improve browsing functionality.
              You can control or disable cookies through your browser settings, though some features may
              not function properly. We encourage the use of VPNs and alias names/emails to further
              protect this information.
            </li>
            <li>
              <strong>Payment Information (limited):</strong> Payments are processed through
              third-party providers. When you make a payment, we receive basic transaction details
              (such as your name, email address, and payment confirmation) from our third-party payment
              processors. We do not collect, store, or control full payment information (such as credit
              card numbers).
            </li>
          </ul>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide, operate, and improve our Services</li>
            <li>Communicate with you about services, consultations, updates, and educational resources</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send promotional content (if you opt in)</li>
            <li>Maintain security, compliance, and business operations</li>
          </ul>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. How We Share Information</h2>
          <p>We do not sell your personal information. We may share limited information only in the following cases:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>With service providers (e.g., email hosting, analytics, payment processors) who assist us in delivering Services</li>
            <li>When required by law, legal process, or government request</li>
            <li>To protect the rights, property, or safety of our business, clients, or others</li>
          </ul>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We take the security of your information seriously. While no online service can ever be 100%
            secure, we implement reasonable administrative, technical, and physical safeguards designed
            to protect your information against unauthorized access, use, or disclosure.
          </p>
          <p>
            We limit access to your information to only those personnel who need it to provide Services.
            Please note that we rely on third-party providers (such as hosting platforms and payment
            processors) for certain services. These providers maintain their own security practices, and
            we encourage you to review their policies for details.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request corrections or deletions</li>
            <li>Opt out of promotional communications at any time</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:contact@granitebitcoin.com" className="text-amber-600 underline">contact@granitebitcoin.com</a>.</p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Children’s Privacy</h2>
          <p>Our Services are intended for adults. We do not knowingly collect personal information from children under 18. If you believe we have collected such information, please contact us, and we will delete it.</p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Retention of Information</h2>
          <p>We retain personal information only as long as necessary to provide Services, comply with legal obligations, or resolve disputes.</p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Third-Party Links</h2>
          <p>Our website may link to third-party websites. We are not responsible for the privacy practices of those sites.</p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a new effective date.</p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p>If you have any questions or concerns, reach out at <a href="mailto:contact@granitebitcoin.com" className="text-amber-600 underline">contact@granitebitcoin.com</a>.</p>
        </section>
      </div>
      </>
    );
  }
