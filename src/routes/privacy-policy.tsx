import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, Check } from 'lucide-react'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
})

function PhoneOptIn() {
  const [phone, setPhone] = useState('')
  const [consented, setConsented] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (phone && consented) {
      setSubmitted(true)
    }
  }

  return (
    <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-emerald-200 bg-emerald-50/50">
      <h3 className="text-lg font-semibold text-stone-900 mb-1">
        SMS Notifications Opt-In
      </h3>
      <p className="text-sm text-stone-500 mb-5 leading-relaxed">
        Enter your phone number below to receive status updates about your
        reported issues via text message. Message and data rates may apply.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-emerald-100 border border-emerald-200"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
            <Check size={16} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-emerald-900">
              You're signed up!
            </p>
            <p className="text-xs text-emerald-700">
              You'll receive SMS updates at {phone}.
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-stone-700 mb-1.5"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full max-w-sm px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={consented}
                onChange={(e) => setConsented(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-5 h-5 rounded border-2 border-stone-300 bg-white peer-checked:border-emerald-600 peer-checked:bg-emerald-600 transition-all flex items-center justify-center group-hover:border-stone-400 peer-checked:group-hover:border-emerald-700">
                {consented && <Check size={13} className="text-white" />}
              </div>
            </div>
            <span className="text-sm text-stone-600 leading-relaxed">
              I consent to receiving SMS text messages from Civiq regarding issue
              updates and city notifications. Message frequency varies. Reply
              STOP to unsubscribe at any time. Message and data rates may apply.
              View our{' '}
              <Link
                to="/terms-and-conditions"
                className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                Terms &amp; Conditions
              </Link>{' '}
              for more details.
            </span>
          </label>

          <motion.button
            type="submit"
            disabled={!phone || !consented}
            whileHover={phone && consented ? { scale: 1.02 } : {}}
            whileTap={phone && consented ? { scale: 0.98 } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-5 py-2.5 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
          >
            Sign Up for SMS Updates
          </motion.button>
        </form>
      )}
    </div>
  )
}

function PrivacyPolicyPage() {
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p>
                Civiq (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                respects your privacy and is committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our AI-powered city government operations platform and
                related services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-stone-800">
                    Personal Information:
                  </strong>{' '}
                  Name, email address, phone number, and mailing address when
                  you contact us, request a demo, or report an issue.
                </li>
                <li>
                  <strong className="text-stone-800">
                    Issue Report Data:
                  </strong>{' '}
                  Details about city service requests, complaints, or issues you
                  report through our platform.
                </li>
                <li>
                  <strong className="text-stone-800">
                    Communication Records:
                  </strong>{' '}
                  Transcripts and recordings of calls handled by our AI agents,
                  SMS messages, and email correspondence.
                </li>
                <li>
                  <strong className="text-stone-800">Usage Data:</strong>{' '}
                  Information about how you interact with our services, including
                  IP address, browser type, and device information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  To process, triage, and resolve city service requests and
                  issues.
                </li>
                <li>
                  To send you updates and notifications about reported issues via
                  SMS, email, or phone.
                </li>
                <li>
                  To coordinate between city departments to resolve your
                  requests.
                </li>
                <li>
                  To improve our AI agents and overall service quality.
                </li>
                <li>To comply with legal obligations and government requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                4. SMS/Text Messaging
              </h2>
              <p className="mb-3">
                If you opt in to receive SMS text messages from Civiq:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  We will send you messages related to issue status updates, city
                  notifications, and service alerts.
                </li>
                <li>Message frequency varies based on your reported issues and city activity.</li>
                <li>
                  Message and data rates may apply depending on your mobile
                  carrier and plan.
                </li>
                <li>
                  You may opt out at any time by replying <strong className="text-stone-800">STOP</strong> to any
                  message.
                </li>
                <li>
                  For help, reply <strong className="text-stone-800">HELP</strong> or contact us at{' '}
                  <a
                    href="mailto:support@civiq.ai"
                    className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    support@civiq.ai
                  </a>
                  .
                </li>
                <li>
                  We will not share your phone number with third parties for
                  marketing purposes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                5. Data Sharing
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share your data
                with:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-stone-800">
                    Municipal Partners:
                  </strong>{' '}
                  City government departments necessary to resolve your reported
                  issues.
                </li>
                <li>
                  <strong className="text-stone-800">Service Providers:</strong>{' '}
                  Third-party vendors who help us operate our platform (e.g.,
                  cloud hosting, telecommunications).
                </li>
                <li>
                  <strong className="text-stone-800">Legal Requirements:</strong>{' '}
                  When required by law, regulation, or legal process.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                6. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                personal information, including encryption in transit and at
                rest, access controls, and regular security audits. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes described in this
                policy, or as required by law. Issue report data may be retained
                in accordance with municipal records retention requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                8. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>
                  Request deletion of your personal information, subject to
                  legal retention requirements.
                </li>
                <li>
                  Opt out of SMS communications at any time by replying STOP.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                9. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data
                practices, please contact us at{' '}
                <a
                  href="mailto:support@civiq.ai"
                  className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  support@civiq.ai
                </a>
                .
              </p>
            </section>

            {/* Phone Opt-In Section */}
            <PhoneOptIn />
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
