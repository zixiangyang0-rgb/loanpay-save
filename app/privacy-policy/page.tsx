import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Save",
  description:
    "Privacy policy for save.loanpaylogic.com: what we collect, cookies and Google AdSense, CCPA rights, and ad opt-out choices.",
  alternates: {
    canonical: "https://save.loanpaylogic.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-xs text-slate-400">
        Last updated: October 1, 2026. Applies to https://save.loanpaylogic.com.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Save (&quot;we&quot;) respects your privacy. This policy explains what we collect
        when you visit save.loanpaylogic.com, how Google AdSense uses cookies to show ads, and the
        choices you have. Contact us at support@loanpaylogic.com with any questions.
      </p>

      <h2 className="mt-8 text-xl font-semibold">What we collect</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Our guides and on-page estimators run in your browser. We do not require accounts and do
        not store the balances or figures you type into our tools. If you email us at
        support@loanpaylogic.com, we receive your address and message so we can reply. Our hosting
        provider may log basic technical data (such as requested pages, timestamps, and truncated
        network information) to keep the site fast, fix errors, and understand which guides are
        helpful in aggregate.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Cookies &amp; AdSense</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We use Google AdSense to show ads. Google may use cookies, including the DoubleClick
        cookie, and device identifiers to serve personalized or non-personalized ads based on your
        visits to this and other sites. Personalized ads use your past visits and interests;
        non-personalized ads use contextual information such as the page you are viewing. Google
        may also use web beacons to collect aggregate ad performance data. Learn more in{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          className="underline underline-offset-2"
          rel="noopener noreferrer"
        >
          Google&apos;s Advertising Privacy information
        </a>
        .
      </p>

      <h2 className="mt-8 text-xl font-semibold">Your privacy choices (CCPA)</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We never sell personal information. Under the California Consumer Privacy Act (CCPA) and
        similar US state laws, California residents may request to know what personal information
        we hold about them, request deletion, and opt out of the &quot;sale&quot; or
        &quot;sharing&quot; of personal information for cross-context behavioral advertising. To
        exercise these rights, email support@loanpaylogic.com with the subject
        &quot;Privacy Request&quot;; we will respond within a reasonable time and will not
        discriminate against you for exercising your rights.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Ad opt-out links</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300">
        <li>
          <a
            href="https://adssettings.google.com"
            className="underline underline-offset-2"
            rel="noopener noreferrer"
          >
            Google Ads Settings (adssettings.google.com)
          </a>{" "}
          — control how Google personalizes ads for you.
        </li>
        <li>
          <a
            href="https://optout.networkadvertising.org"
            className="underline underline-offset-2"
            rel="noopener noreferrer"
          >
            NAI opt-out (Network Advertising Initiative)
          </a>{" "}
          — opt out of interest-based ads from participating networks.
        </li>
        <li>
          <a
            href="https://optout.aboutads.info"
            className="underline underline-offset-2"
            rel="noopener noreferrer"
          >
            DAA opt-out (Digital Advertising Alliance)
          </a>{" "}
          — opt out of interest-based ads from participating companies.
        </li>
        <li>
          Use the cookie banner on this site: choosing &quot;Decline&quot; serves
          non-personalized ads only.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">How we use information</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We use limited technical data to keep the site fast, fix errors, understand which guides
        are helpful, and respond to support requests. We share data with Google AdSense as needed
        to display ads and measure their performance, as described above. We never sell personal
        information.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        For privacy questions about save.loanpaylogic.com, email support@loanpaylogic.com and we
        will respond within a reasonable time.
      </p>
    </div>
  );
}
