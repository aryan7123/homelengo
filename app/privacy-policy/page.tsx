"use client";

import React from "react";
import Navbar from "../components/Navbar";
import ScrollUpButton from "../components/ScrollUpButton";
import Footer from "../components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative privacy-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex text-sm items-center justify-center gap-1">
                <Link href="/">Home</Link> /<span>Pages</span> /
                <span>Privacy Policy</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-extrabold mt-4">
                Privacy Policy
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 pb-12 md:px-0">
          <h1 className="text-3xl font-bold mb-6">Privacy & Policy</h1>
          <p className="text-sm mb-4">Effective Date: 10/07/2025</p>

          <p className="mb-6">
            Welcome to <strong>HomeLengo</strong>. We take your privacy
            seriously and are committed to safeguarding your personal data. This
            Privacy Policy explains how we collect, use, store, and protect the
            information you provide while using our website and services in both
            the UK and the USA.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              1. Information We Collect
            </h2>

            <h3 className="font-medium mb-2">a) Personal Information</h3>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property preferences</li>
              <li>Account login details</li>
              <li>Messages or inquiries sent through the platform</li>
              <li>
                Billing information and identification documents (if required)
              </li>
            </ul>

            <h3 className="font-medium mb-2">
              b) Non-Personal & Technical Data
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>IP address</li>
              <li>Browser and device type</li>
              <li>Location data</li>
              <li>Pages visited and time spent</li>
              <li>Click and interaction data</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Provide access to listings and personalized services</li>
              <li>Send alerts, newsletters, or updates</li>
              <li>Assist with inquiries or viewings</li>
              <li>Improve website performance</li>
              <li>Ensure legal compliance</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell or rent your data.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              3. Cookies and Tracking Tools
            </h2>
            <p className="mb-2">
              We use cookies and tools like <strong>Google Analytics</strong>{" "}
              and <strong>Facebook Pixel</strong> to:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Understand how users interact</li>
              <li>Deliver personalized content and ads</li>
              <li>Save preferences and sessions</li>
            </ul>
            <p className="mt-3">
              You can manage cookies via your browser or opt out of specific
              tracking.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              4. Sharing Your Information
            </h2>
            <p className="mb-2">
              We may share data with trusted third parties:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Real estate agents</li>
              <li>Payment processors</li>
              <li>CRM and analytics platforms</li>
              <li>Legal authorities (if required)</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              5. International Data Transfers
            </h2>
            <p>
              Since HomeLengo operates in both the UK and USA, data may be
              processed in either region. We follow legal safeguards to ensure
              compliance with GDPR and US regulations.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>SSL encryption</li>
              <li>Data backups and monitoring</li>
              <li>Access control</li>
              <li>Secure infrastructure</li>
            </ul>
            <p className="mt-3">
              While we use industry best practices, no system is 100% secure.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access or correct your data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
              <li>File a complaint</li>
            </ul>
            <p className="mt-3">
              Contact us at{" "}
              <a
                href="mailto:support@homelengo.com"
                className="text-blue-600 underline"
              >
                support@homelengo.com
              </a>{" "}
              or call:
            </p>
            <ul className="ml-6 mt-2 space-y-1">
              <li>📞 UK: +44 1234 567890</li>
              <li>📞 USA: +1 234 567 8901</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              8. Children’s Privacy
            </h2>
            <p>
              HomeLengo is not intended for users under 18. If you suspect a
              child has submitted data, contact us for immediate removal.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Third-Party Links</h2>
            <p>
              Our site may link to third-party websites. We are not responsible
              for their privacy policies or content. Please review them
              separately.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this policy occasionally. Changes will be posted
              here with an updated &quot;Effective Date.&quot; Continued use means you
              accept the changes.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-2">
            <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
            <p>For any questions or concerns, please contact us at:</p>
            <ul className="ml-6 mt-2 space-y-1">
              <li>
                📧 Email:{" "}
                <Link
                  href="mailto:support@homelengo.com"
                  className="text-blue-600 underline"
                >
                  support@homelengo.com
                </Link>
              </li>
              <li>📞 UK Phone: +44 1234 567890</li>
              <li>📞 USA Phone: +1 234 567 8901</li>
              <li>
                🌐 Website:{" "}
                <Link
                  href="/"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  www.homelengo.com
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default page;
