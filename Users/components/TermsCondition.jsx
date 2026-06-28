import React from "react";

const TermsCondition = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#111111] text-white overflow-hidden px-6 py-16 md:px-24 lg:px-48 selection:bg-purple-500 selection:text-white">
      
      {/* Background Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        <h1
          className="text-4xl md:text-5xl font-serif text-center mb-16 my-20"
          style={{ fontFamily: "serif" }}
        >
          Terms & Conditions
        </h1>

        {/* 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            1. Acceptance of Terms
          </h2>

          <p className="text-gray-300 leading-8">
            By accessing or using our Service, you agree to be bound by these
            Terms and all applicable laws and regulations. If you do not agree
            with any part of these Terms, you must immediately discontinue use
            of the Service.
          </p>
        </section>

        {/* 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6">
            2. Services & Use
          </h2>

          <div className="space-y-6 pl-6">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                2.1 Scope of Services
              </h3>

              <p className="text-gray-300 leading-8">
                We provide digital marketing, creative design, branding, web
                development, social media management, ad creation, SEO/SEM,
                AI-driven campaigns, analytics, and related services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                2.2 Eligibility
              </h3>

              <p className="text-gray-300 leading-8">
                You must be at least 18 years old, or the age of legal majority
                in your jurisdiction, to use the Service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                2.3 Account Responsibility
              </h3>

              <p className="text-gray-300 leading-8">
                If you register for an account, you are responsible for
                maintaining the confidentiality of your credentials and for all
                activities that occur under your account.
              </p>
            </div>

          </div>
        </section>

        {/* 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6">
            3. Intellectual Property
          </h2>

          <div className="space-y-6 pl-6">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                3.1 Ownership
              </h3>

              <p className="text-gray-300 leading-8">
                All content, trademarks, logos, designs, code, and other
                materials ("Materials") on the Service are the exclusive
                property of DEMICS or its licensors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                3.2 License
              </h3>

              <p className="text-gray-300 leading-8">
                We grant you a limited, non-exclusive, non-transferable,
                revocable license to access and use the Service solely for your
                internal business purposes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                3.3 Restrictions
              </h3>

              <p className="text-gray-300 leading-8">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, or otherwise exploit any Materials
                without our prior written consent.
              </p>
            </div>

          </div>
        </section>

        {/* 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6">
            4. Client Content & License
          </h2>

          <div className="space-y-6 pl-6">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                4.1 Your Content
              </h3>

              <p className="text-gray-300 leading-8">
                You retain ownership of all data, text, images, and other
                materials you submit ("Client Content").
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                4.2 License to Us
              </h3>

              <p className="text-gray-300 leading-8">
                By submitting Client Content, you grant us a worldwide,
                royalty-free, sublicensable, transferable license to use,
                reproduce, distribute, and display it solely for providing our
                Services.
              </p>
            </div>

          </div>
        </section>

        {/* 5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            5. Payments & Fees
          </h2>

          <p className="text-gray-300 leading-8">
            All fees for Services are outlined in your written proposal or
            agreement. Unless otherwise specified, invoices are payable within
            30 days. Late payments may incur interest at 1.5% per month or the
            maximum permitted by law. Unless agreed otherwise in writing, all
            payments are non-refundable.
          </p>
        </section>

        {/* 6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            6. Confidentiality
          </h2>

          <p className="text-gray-300 leading-8">
            Both parties agree to maintain the confidentiality of all non-public
            business or technical information shared during the course of the
            Services and use such information only for fulfilling contractual
            obligations.
          </p>
        </section>

        {/* 7 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            7. Warranties & Disclaimers
          </h2>

          <p className="text-gray-300 leading-8">
            We warrant that our Services will be performed professionally and in
            accordance with industry standards. Except as expressly stated, all
            Services and Materials are provided "AS IS" without warranties of
            any kind.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            8. Limitation of Liability
          </h2>

          <p className="text-gray-300 leading-8">
            DEMICS shall not be liable for indirect, incidental, consequential,
            or punitive damages. Our total liability shall not exceed the amount
            paid by you during the six months preceding the claim.
          </p>
        </section>

        {/* 9 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            9. Indemnification
          </h2>

          <p className="text-gray-300 leading-8">
            You agree to indemnify and hold harmless DEMICS and its employees
            from any claims, liabilities, damages, or expenses resulting from
            your breach of these Terms or violation of applicable laws.
          </p>
        </section>

        {/* 10 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            10. Termination
          </h2>

          <p className="text-gray-300 leading-8">
            Either party may terminate these Terms in accordance with the
            agreement. Upon termination, your right to use the Service
            immediately ends, while applicable legal obligations survive.
          </p>
        </section>

        {/* 11 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            11. Governing Law & Dispute Resolution
          </h2>

          <p className="text-gray-300 leading-8">
            These Terms are governed by the laws of the State of California.
            Any disputes shall be resolved through binding arbitration under the
            rules of the American Arbitration Association.
          </p>
        </section>

        {/* 12 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            12. Changes to These Terms
          </h2>

          <p className="text-gray-300 leading-8">
            We reserve the right to update these Terms at any time. Continued
            use of our Services after changes are posted constitutes your
            acceptance of the revised Terms.
          </p>
        </section>

        {/* 13 */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">
            13. Contact Us
          </h2>

          <div className="text-gray-300 leading-8">
            <p>If you have any questions about these Terms, contact us:</p>

            <div className="mt-6 space-y-2">
              <h3 className="text-white text-lg font-semibold">DEMICS</h3>

              <p>
                Email:{" "}
                <a
                  href="mailto:legal@demics.io"
                  className="text-purple-400 hover:underline"
                >
                  legal@demics.io
                </a>
              </p>

              <p>
                Address: 123 Innovation Drive, San Francisco, CA 94107
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TermsCondition;