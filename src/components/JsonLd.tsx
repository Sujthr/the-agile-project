export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Agile Project",
    url: "https://theagileproject.com",
    description:
      "Expert insights on Agile project management, product delivery, and building high-performance fintech & trading platforms.",
    author: {
      "@type": "Person",
      name: "Sujit Kumar Thakur",
      jobTitle: "Senior Project Manager",
      url: "https://theagileproject.com/about",
      sameAs: [
        "https://www.linkedin.com/in/sujit-kumar-thakur-699263117/",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sujit Kumar Thakur",
    jobTitle: "Senior Project Manager | Fintech & Trading Platforms",
    url: "https://theagileproject.com",
    email: "thakursujitkumar@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/sujit-kumar-thakur-699263117/",
    ],
    knowsAbout: [
      "Agile Project Management",
      "Scrum",
      "Fintech",
      "Trading Platforms",
      "Order Management Systems",
      "Product Management",
      "Software Delivery",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url: `https://theagileproject.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: "Sujit Kumar Thakur",
      url: "https://theagileproject.com/about",
    },
    publisher: {
      "@type": "Person",
      name: "Sujit Kumar Thakur",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
