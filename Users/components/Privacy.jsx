import React from "react";

const Privacy = () => {
  return (
    // <div className="min-h-screen pt-24 md:pt-28 pb-20 px-5 sm:px-8">
    <div className="min-h-screen bg-[#111111] pt-24 md:pt-28 pb-20 px-5 sm:px-8">
      {/* <div className="max-w-6xl mx-auto text-white"> */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 text-white">
    

        <h1 className="font-awesome text-[48px] sm:text-[56px] md:text-[64px] lg:text-[72px] leading-none text-left mt-6 md:mt-10 mb-12 md:mb-16">
  Privacy Policy
</h1>

        {/* 1 */}
        <h3 className="text-2xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h3>

        <h4 className="text-lg font-medium mt-4 mb-2">
          1.1 Personal Information
        </h4>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            <span className="font-semibold text-white">Account Data:</span>{" "}
            Name, email address, phone number, company name, and billing
            details you provide when you sign up or request a proposal.
          </li>

          <li>
            <span className="font-semibold text-white">
              Communication Data:
            </span>{" "}
            Any information you send us via contact forms, live chat, email, or
            phone.
          </li>
        </ul>

        <h4 className="text-lg font-medium mt-5 mb-2">
          1.2 Usage & Technical Data
        </h4>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            <span className="font-semibold text-white">Log Data:</span> IP
            address, browser type/version, pages visited, timestamps, and
            referring URLs.
          </li>

          <li>
            <span className="font-semibold text-white">Device Data:</span>{" "}
            Device type, operating system, screen resolution, and unique device
            identifiers.
          </li>

          <li>
            <span className="font-semibold text-white">
              Cookies & Tracking:
            </span>{" "}
            Analytics cookies (Google Analytics), marketing pixels (Meta Pixel),
            and similar technologies to understand site performance and deliver
            targeted ads.
          </li>
        </ul>

        {/* 2 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            <span className="font-semibold text-white">
              Service Delivery:
            </span>{" "}
            To respond to inquiries, provide quotes, deliver services, and
            manage your account.
          </li>

          <li>
            <span className="font-semibold text-white">
              Improvement & Personalization:
            </span>{" "}
            To analyze usage trends, optimize the user experience, and tailor
            content.
          </li>

          <li>
            <span className="font-semibold text-white">
              Marketing & Communications:
            </span>{" "}
            To send newsletters, service updates, promotional offers, and event
            invitations—only if you've opted in.
          </li>

          <li>
            <span className="font-semibold text-white">
              Legal & Security:
            </span>{" "}
            To detect fraud, enforce our terms, and comply with legal
            obligations.
          </li>
        </ul>

        {/* 3 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">
          3. Information Sharing & Disclosure
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            <span className="font-semibold text-white">
              Service Providers:
            </span>{" "}
            We may share data with trusted vendors (hosting, analytics, CRM,
            email, payment processors) solely to perform services on our behalf.
          </li>

          <li>
            <span className="font-semibold text-white">
              Legal Requirements:
            </span>{" "}
            We will disclose information to comply with laws, respond to legal
            processes, or protect rights and safety.
          </li>

          <li>
            <span className="font-semibold text-white">
              Business Transfers:
            </span>{" "}
            If we reorganize, merge, or sell assets, your information may be
            transferred subject to this Privacy Policy.
          </li>

          <li>
            <span className="font-semibold text-white">
              Aggregated or De-identified Data:
            </span>{" "}
            We may share non-personal analytics and trends publicly or with
            partners.
          </li>
        </ul>

        {/* 4 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">
          4. Cookies & Tracking Technologies
        </h3>

        <p className="text-[15px] leading-7 text-gray-300 mb-2">
          We use cookies, local storage, and tracking pixels to:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>Remember user preferences and session data.</li>
          <li>Analyze site performance and visitor behavior.</li>
          <li>Deliver personalized marketing.</li>
          <li>
            You can manage cookie preferences through your browser settings or
            our cookie banner. Disabling cookies may limit certain features.
          </li>
        </ul>

        {/* 5 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            We implement administrative, technical, and physical safeguards such
            as encryption, secure servers, access controls, and regular audits
            to protect your information from unauthorized access, alteration,
            disclosure, or destruction.
          </li>
        </ul>

        {/* 6 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">
          6. Your Rights & Choices
        </h3>

        <p className="text-[15px] leading-7 text-gray-300 mb-2">
          Depending on your location, you may have the right to:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            <span className="font-semibold text-white">
              Access & Portability:
            </span>{" "}
            Request a copy of your personal data in a structured format.
          </li>

          <li>
            <span className="font-semibold text-white">Rectification:</span>{" "}
            Correct inaccurate or incomplete information.
          </li>

          <li>
            <span className="font-semibold text-white">Erasure:</span> Delete
            your personal data (subject to legal exceptions).
          </li>

          <li>
            <span className="font-semibold text-white">Restriction:</span> Limit
            the processing of your data.
          </li>

          <li>
            <span className="font-semibold text-white">Objection:</span> Object
            to certain processing activities, including direct marketing.
          </li>

          <li>
            <span className="font-semibold text-white">
              Withdraw Consent:
            </span>{" "}
            If processing is based on consent, you may withdraw at any
            time—without affecting prior lawful use.
          </li>

          <li>
            To exercise your rights, please contact us at{" "}
            <span className="text-blue-400 underline">
              privacy@demics.io
            </span>
            .
          </li>
        </ul>

        {/* 7 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">
          7. Children's Privacy
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            Our Service is not directed at children under 16. We do not
            knowingly collect personal data from minors. If you believe we have
            inadvertently collected such data, please contact us so we can
            delete it.
          </li>
        </ul>

        {/* 8 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">
          8. Third-Party Links
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            Our site may contain links to third-party websites. We are not
            responsible for their privacy practices. We encourage you to read
            their privacy policies before providing any personal information.
          </li>
        </ul>

        {/* 9 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">
          9. International Data Transfers
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            DEMICS is headquartered in the United States. If you are located
            outside the U.S., your information may be transferred to,
            processed, and stored in the U.S. We take appropriate measures to
            ensure data protection consistent with this policy and applicable
            law.
          </li>
        </ul>

        {/* 10 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">
          10. Changes to This Policy
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-gray-300">
          <li>
            We may update this Privacy Policy periodically. We will post the
            revised version with a new "Last Updated" date and, when required,
            obtain your consent for material changes.
          </li>
        </ul>

        {/* 11 */}

        <h3 className="text-2xl font-semibold mt-8 mb-2">11. Contact Us</h3>

        <p className="text-[15px] leading-7 text-gray-300">
          If you have questions or concerns about this Privacy Policy or our
          data practices, please contact:
        </p>

        <p className="text-blue-400 underline mt-3">
          privacy@demics.io
        </p>

        <p className="text-gray-300 mt-2">
          Address: 123 Innovation Drive, San Francisco, CA 94107
        </p>

        <p className="text-gray-400 mt-6">
          — End of Privacy Policy —
        </p>
      </div>
    </div>
  );
};

export default Privacy;