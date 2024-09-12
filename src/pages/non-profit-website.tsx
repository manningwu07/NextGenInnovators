import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import NavBar from "~/components/NavBar";
import Activities from "~/components/Activities";
import TeamMembers from "~/components/TeamMembers";

export default function NonProfitWebsite() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      <header className="bg-gradient-to-r from-blue-500 to-purple-600 pb-16 pt-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold">Empowering Communities</h1>
          <p className="mb-8 text-xl">Together, we can make a difference</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="mx-auto" />
          </motion.div>
        </div>
      </header>

      <main>
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">About Us</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-4">
                  Our non-profit organization is dedicated to making a positive
                  impact in our community. We focus on environmental
                  conservation, youth empowerment, and community development.
                </p>
                <p className="mb-4">
                  With a team of passionate volunteers and staff, we organize
                  various events and programs throughout the year to engage and
                  uplift our community members.
                </p>
                <p className="font-semibold">
                  We are proud to be PVSA (President's Volunteer Service Award)
                  approved, recognizing the dedication of our volunteers.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6">
                <h3 className="mb-4 text-xl font-semibold">Our Mission</h3>
                <p>
                  To create a sustainable, inclusive, and thriving community by
                  empowering individuals, preserving our environment, and
                  fostering collaboration among diverse groups.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="bg-gray-100 py-16">
          <Activities />
        </section>

        <section id="team" className="py-16">
          <TeamMembers />
        </section>

        <section id="join" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">Donate</h3>
                <p className="mb-4">
                  Your contribution helps us continue our important work in the
                  community.
                </p>
                <button className="rounded-full bg-white px-6 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-100">
                  Donate Now
                </button>
              </div>
              <div className="rounded-lg bg-purple-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">Join Us</h3>
                <p className="mb-4">
                  Become a volunteer and make a difference in your community.
                </p>
                <button className="rounded-full bg-white px-6 py-2 font-semibold text-purple-600 transition-colors hover:bg-purple-100">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Non-Profit Organization. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
