import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function DonateModal() {
  // State to handle the visibility of the modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {/* Trigger Button */}
      <button
        className="rounded-full bg-white px-6 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-100"
        onClick={openModal}
      >
        Donate Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative !max-w-lg rounded-lg p-8 bg-white text-black shadow-lg">
            {/* Close Button */}
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <h2 className="mb-6 text-center text-3xl font-bold">DONATE</h2>

            <p className="mb-4">
              To inspire the next generation of engineers by teaching youths at
              an early age and exposing them to the possibilities of
              engineering. Our goal is to teach our classes for free in hopes to
              reach youths who are underserved and can&#39;t afford STEM programs.
            </p>

            <p className="mb-4">Your support is greatly appreciated!</p>

            <p className="mb-4">
              Your donation goes a long way to purchase supplies that will
              enrich many students!
            </p>

            <p className="mb-4 italic">
              The NextGen Innovators is registered as a 501(c)(3) non-profit
              organization. Contributions to the organization are tax-deductible
              to the extent permitted by law. The tax identification number is
              99-2408441.
            </p>

            <p className="text-center">
              Please make a donation{" "}
              <Link
                href="https://nextgen-innovators.square.site/product/nextgen-innovators/2?cs=true&cst=popular"
                target="_blank"
                className="font-bold hover:underline !text-red-600"
              >
                HERE
              </Link>
              .
            </p>
            <br></br>

            <div className="mt-6 text-center">
              <Link
                href="https://nextgen-innovators.square.site/product/nextgen-innovators/2?cs=true&cst=popular"
                target="_blank"
                className="rounded-full bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-800"
              >
                DONATE NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
