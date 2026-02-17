import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/terms-and-conditions')({
  component: TermsAndConditionsPage,
})

function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-emerald-50/60 to-white pt-12 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-stone-500 text-sm">
            Last updated: February 16, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-20">
        <div className="max-w-3xl mx-auto prose-stone">
          <div className="space-y-8 text-sm text-stone-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Civiq&apos;s services, including our
                AI-powered city government operations platform, website, and SMS
                notification service (collectively, the &quot;Services&quot;),
                you agree to be bound by these Terms and Conditions. If you do
                not agree to these terms, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                2. Description of Services
              </h2>
              <p>
                Civiq provides AI-powered agents that assist city governments in
                managing operations, including but not limited to: receiving and
                triaging citizen service requests, coordinating between
                departments, providing status updates, and delivering
                notifications via phone, SMS, and email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                3. SMS Messaging Terms
              </h2>
              <p className="mb-3">
                By opting in to Civiq&apos;s SMS notification service, you agree
                to the following:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-stone-800">Program Name:</strong>{' '}
                  Civiq City Notifications
                </li>
                <li>
                  <strong className="text-stone-800">
                    Program Description:
                  </strong>{' '}
                  You will receive text messages with updates about city service
                  requests you have reported or subscribed to, general city
                  notifications, and service alerts.
                </li>
                <li>
                  <strong className="text-stone-800">Message Frequency:</strong>{' '}
                  Message frequency varies. You may receive messages related to
                  issue status changes, resolution updates, and city-wide
                  notifications.
                </li>
                <li>
                  <strong className="text-stone-800">
                    Message and Data Rates:
                  </strong>{' '}
                  Message and data rates may apply. Please consult your mobile
                  carrier for details about your text messaging plan.
                </li>
                <li>
                  <strong className="text-stone-800">Opt-Out:</strong> You may
                  opt out of SMS messages at any time by replying{' '}
                  <strong>STOP</strong> to any message. You will receive a
                  one-time confirmation message, and no further messages will be
                  sent unless you re-subscribe.
                </li>
                <li>
                  <strong className="text-stone-800">Help:</strong> For support,
                  reply <strong>HELP</strong> to any message or contact{' '}
                  <a
                    href="mailto:support@civiq.ai"
                    className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    support@civiq.ai
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-stone-800">
                    Supported Carriers:
                  </strong>{' '}
                  Compatible with major US carriers including AT&amp;T, Verizon,
                  T-Mobile, and Sprint. Coverage is not available in all areas.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                4. User Consent
              </h2>
              <p>
                There are two ways in which users consent to receiving messages
                from Civiq:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mt-3">
                <li>
                  By explicitly stating so while on a call — users will be asked
                  if they&apos;d like to receive a text message containing
                  additional information and status updates about their reported
                  issue.
                </li>
                <li>
                  By registering their phone number on our website and checking
                  the consent box on our{' '}
                  <Link
                    to="/privacy-policy"
                    className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    Privacy Policy
                  </Link>{' '}
                  page, thereby explicitly opting in to receive SMS
                  notifications.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                5. Use of Services
              </h2>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate information when reporting issues or creating an account.</li>
                <li>
                  Use the Services only for lawful purposes related to city
                  government operations and citizen services.
                </li>
                <li>
                  Not attempt to interfere with, disrupt, or compromise the
                  integrity of our AI agents or platform.
                </li>
                <li>
                  Not misrepresent your identity or affiliation when using the
                  Services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                6. AI-Powered Services
              </h2>
              <p>
                Our Services utilize artificial intelligence to process and
                respond to requests. While we strive for accuracy and
                reliability, AI-generated responses may not always be perfect.
                Critical or emergency situations should be directed to
                appropriate emergency services (911). Civiq is not a replacement
                for emergency services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                7. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of the Civiq platform,
                including but not limited to software, text, graphics, logos, and
                AI models, are the exclusive property of Civiq and are protected
                by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Civiq shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of data,
                service interruptions, or any damages arising from the use or
                inability to use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                9. Privacy
              </h2>
              <p>
                Your use of our Services is also governed by our{' '}
                <Link
                  to="/privacy-policy"
                  className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be effective upon posting to our website. Your continued use
                of the Services after changes constitutes acceptance of the
                revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Illinois, without regard to
                conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                12. Contact
              </h2>
              <p>
                For questions about these Terms, contact us at{' '}
                <a
                  href="mailto:support@civiq.ai"
                  className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  support@civiq.ai
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 bg-white border-t border-stone-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-sm font-bold text-emerald-800">
            civiq
          </Link>
          <div className="flex items-center gap-6 text-xs text-stone-400">
            <Link
              to="/privacy-policy"
              className="hover:text-stone-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-stone-600 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="text-xs text-stone-400">&copy; 2026 Civiq</p>
        </div>
      </footer>
    </div>
  )
}
