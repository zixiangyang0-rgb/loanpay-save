const SITE = "https://save.loanpaylogic.com";
const ORG_NAME = "LoanPay Save";

interface ArticleProps {
  slug: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

function jsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data);
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE,
    logo: `${SITE}/icon.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@loanpaylogic.com",
      contactType: "customer support",
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />
  );
}

export function ArticleJsonLd({
  slug,
  title,
  description,
  datePublished = "2026-10-01",
  dateModified = "2026-10-01",
}: ArticleProps) {
  const url = `${SITE}${slug.startsWith("/") ? slug : `/${slug}`}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    image: [`${SITE}/og-default.png`],
    author: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/icon.svg`,
      },
    },
    datePublished,
    dateModified,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />
  );
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />
  );
}

export function BreadcrumbJsonLd({ slug, title }: { slug: string; title: string }) {
  const url = `${SITE}${slug.startsWith("/") ? slug : `/${slug}`}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: url,
      },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />
  );
}

export function stripTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
