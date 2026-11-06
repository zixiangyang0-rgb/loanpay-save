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

/* ---- Ported from loanpay-guides/app/components/schema.tsx (save-adapted) ---- */

const SAVE_SITE_URL = SITE;
const SAVE_ORG_NAME = ORG_NAME;

export type GuideFaqItem = FaqItem;

type GuideSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  faqs?: FaqItem[];
};

function guideStripHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Per-article Article + FAQPage + BreadcrumbList JSON-LD.
 * FAQ answers are plain text (HTML stripped) to keep validation clean.
 */
export function GuideSchema({
  title,
  description,
  slug,
  datePublished = "2026-10-01",
  dateModified = "2026-10-01",
  faqs = [],
}: GuideSchemaProps) {
  const pageUrl = `${SAVE_SITE_URL}/${slug.replace(/^\//, "")}`;
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: title,
      description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      datePublished,
      dateModified,
      author: {
        "@type": "Organization",
        name: SAVE_ORG_NAME,
        url: SAVE_SITE_URL,
      },
      publisher: { "@id": `${SAVE_SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SAVE_SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: pageUrl,
        },
      ],
    },
  ];

  const cleanFaqs = faqs
    .map((f) => ({
      question: guideStripHtml(f.question).slice(0, 300),
      answer: guideStripHtml(f.answer).slice(0, 1000),
    }))
    .filter((f) => f.question.length > 0 && f.answer.length > 0);

  if (cleanFaqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: cleanFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const json = { "@context": "https://schema.org", "@graph": graph };
  return (
    <script
      id={`save-ld-${slug.replace(/^\/+|\/+$/g, "")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(json) }}
    />
  );
}

/** Editorial byline shown under each save guide hero. */
export function Byline({ updated = "October 2026" }: { updated?: string }) {
  return (
    <p className="mt-4 text-sm leading-relaxed opacity-80">
      By <span className="font-medium">LoanPay Save Editorial Team</span> · Updated: {updated} ·
      Educational guide, not financial advice.
    </p>
  );
}
