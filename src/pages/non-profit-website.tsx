import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NavBar from "~/components/NavBar";
import Activities from "~/components/Activities";
import TeamMembers from "~/components/TeamMembers";
import DonateModal from "~/components/Donate";
import Link from "next/link";
import type { Activity } from "~/types/event";
import upcomingActivities from '~/activities/upcomingActivities.json';
import pastActivities from '~/activities/pastActivities.json';


// Use the type to assert the imported JSON data
const upcomingActivitiesTyped: Activity[] = upcomingActivities;
const pastActivitiesTyped: Activity[] = pastActivities;

export const handleScroll = (location: string) => {
  const section = document.querySelector(location);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function NonProfitWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      <header
        style={{ backgroundImage: "url('/landing_page_bg.jpg')" }}
        className="relative mt-16 h-[423px] w-full bg-cover bg-center bg-no-repeat text-white md:h-auto"
      >
        <div className="md:relative w-full " style = {{aspectRatio: "16/9"}}>
          <div className="absolute inset-0 z-0 bg-black opacity-60"></div>

          <div className="relative z-10 text-center h-full flex flex-col justify-center">
            <div className="mt-60 sm:mt-28 md:mt-0">&nbsp;</div> 
            <h1 className="mb-4 text-5xl font-bold">NextGen Innovators</h1>
            <p className="mb-10 text-xl">
              Non-Profit Organization devoted to teaching students about
              engineering
            </p>

            <div
              onClick={() => handleScroll("#about")}
              className="mb-10 cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown size={32} className="mx-auto" />
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="scroll-smooth py-24">
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
                  students&#39; knowledge in a variety of engineering fields. We
                  inspire our youths to develop leadership, teamwork, and
                  communication skills and to create a positive impact in the
                  communities where they live and serve.
                </p>
                <p className="font-semibold">
                  We are proud to be PVSA (President&#39;s Volunteer Service Award)
                  approved, recognizing the dedication of our volunteers.Our
                  organization is PVSA approved and we are able to provide
                  students with official volunteer hours. Volunteers are also
                  granted the opportunity to receive the Presidential Volunteer
                  Service Award.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6">
                <h3 className="mb-4 text-center text-2xl font-semibold">
                  Our Mission
                </h3>
                <p className="text-center text-lg">
                  To collaborate with local communities and educational partners
                  to inspire and empower students in Dublin and beyond. We are
                  committed to expanding opportunities in engineering education,
                  ensuring that all students—regardless of background—have
                  access to hands-on learning experiences that spark curiosity
                  and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="upcomingEvents" className="bg-gray-100 py-24">
          <Activities
            title={"Upcoming Events"}
            activities={upcomingActivitiesTyped}
          />
        </section>

        <section id="pastEvents" className="bg-gray-100 py-24">
          <Activities
            title={"What we have done in the past"}
            activities={pastActivitiesTyped}
          />
        </section>

        <section id="team" className="py-24">
          <TeamMembers />
        </section>

        <section id="join" className="bg-gray-100 py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-blue-600 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">Donate</h3>
                <p className="mb-4 text-white">
                  Your contribution helps us continue our important work in the
                  community.
                </p>
                <DonateModal />
              </div>
              <div className="rounded-lg bg-purple-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">Join Us</h3>
                <p className="mb-4">
                  Become a volunteer and make a difference in your community.
                </p>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdnMbSLwUEZ47H2FFUTjAqzW5npT9uHt3jeObDHfjtZ5JckUw/viewform"
                  target="_blank"
                >
                  <button className="rounded-full bg-white px-6 py-2 font-semibold text-purple-600 transition-colors hover:bg-purple-100">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8 text-white">
        <div className="flex justify-center mb-3 text-lg"> 
          <p>Contact us:&nbsp;</p>
          <Link href="mailto:nextgeninnovators24@gmail.com">
            <span className="text-white hover:underline">nextgeninnovators24@gmail.com</span>
          </Link>
        </div>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; Copyright stuff add here. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
