import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 prose prose-slate prose-lg">
        <h1>Terms of Use</h1>
        <p>Last updated: April 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using theagileproject.com, you accept and agree to
          be bound by these terms and conditions.
        </p>

        <h2>Content</h2>
        <p>
          All content published on this website — including blog posts, videos,
          templates, and other resources — is provided for informational
          purposes only. While we strive for accuracy, we make no guarantees
          about the completeness or applicability of the content to your
          specific situation.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All original content on this website is the intellectual property of
          Sujit Kumar Thakur unless otherwise stated. You may share links to
          content freely, but reproducing content in full requires written
          permission.
        </p>

        <h2>External Links</h2>
        <p>
          This website may contain links to external websites. We are not
          responsible for the content or privacy practices of those sites.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          The content on this website is not professional advice. We are not
          liable for any decisions made based on the content published here.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, contact{" "}
          <a href="mailto:thakursujitkumar@gmail.com">
            thakursujitkumar@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
