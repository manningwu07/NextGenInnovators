import { motion } from "framer-motion";

const teamMembers = [
    {
      name: "Jane Doe",
      role: "Executive Director",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "John Smith",
      role: "Operations Manager",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Emily Brown",
      role: "Volunteer Coordinator",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Michael Lee",
      role: "Fundraising Specialist",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Sarah Johnson",
      role: "Community Outreach",
      image: "/placeholder.svg?height=150&width=150",
    },
  ];
  

  export default function TeamMembers() {
    return (
        <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
            <div className="grid gap-8 md:grid-cols-5">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-4 h-32 w-32 rounded-full"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
    );
}