import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 prose prose-slate prose-lg">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 2026</p>

        <h2>Information We Collect</h2>
        <p>
          When you use the contact form on this website, we collect the
          information you provide, including your name, email address, and
          message content. We may also collect anonymous analytics data about
          page visits using privacy-friendly analytics tools.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries</li>
          <li>To improve the content and user experience of this website</li>
          <li>To send occasional updates if you opt in to our mailing list</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or share your personal information with third
          parties, except as necessary to operate this website (e.g., email
          delivery services).
        </p>

        <h2>Cookies</h2>
        <p>
          This website uses minimal cookies for essential functionality. We do
          not use tracking cookies or third-party advertising cookies.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data at any time by contacting us at thakursujitkumar@gmail.com.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please email{" "}
          <a href="mailto:thakursujitkumar@gmail.com">
            thakursujitkumar@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
