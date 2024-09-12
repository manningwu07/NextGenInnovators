import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NavBar from "~/components/NavBar";
import Activities from "~/components/Activities";
import TeamMembers from "~/components/TeamMembers";
import DonateModal from "~/components/Donate";

export default function NonProfitWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      <header className="bg-gradient-to-r from-blue-500 to-purple-600 pb-16 pt-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold">NextGen Innovators</h1>
          <p className="mb-8 text-xl">
            Non-Profit Organization devoted to teaching students about
            engineering
          </p>
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
                  The NextGen Innovators is a registered 501(c)(3) non-profit
                  organization dedicated to providing a place for youths to
                  explore and learn STEM and Engineering concepts.
                </p>
                <p className="mb-4">
                  We engage youths through hands-on learning and expand
                  students' knowledge in a variety of engineering fields. We
                  inspire our youths to develop leadership, teamwork, and
                  communication skills and to create a positive impact in the
                  communities where they live and serve.
                </p>
                <p className="font-semibold">
                  We are proud to be PVSA (President's Volunteer Service Award)
                  approved, recognizing the dedication of our volunteers.Our
                  organization is PVSA approved and we are able to provide
                  students with official volunteer hours. Volunteers are also
                  granted the opportunity to receive the Presidential Volunteer
                  Service Award.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6">
                <h3 className="mb-4 text-2xl font-semibold text-center">Our Mission</h3>
                <p className = "text-center text-lg">
                  Type some stuff here
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
              <div className="rounded-lg bg-blue-600 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">Donate</h3>
                <p className="mb-4 text-white">
                  Your contribution helps us continue our important work in the
                  community.
                </p>
                <DonateModal/>
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
          <p>&copy; Copyright stuff add here. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
