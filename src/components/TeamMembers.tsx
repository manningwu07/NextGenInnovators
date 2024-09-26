import { motion } from "framer-motion";

// Fill in information for each team member; you can add or delete new team 
// members as needed - should be adaptive to the number of team members 

// To link the images, put your image in the Team_Members folder inside the public folder (all images should go there)
// and use the following format for the image path: "/public/Team_Members/image-name.[file-type]"  
// Keep in mind the image size should be square aspect ratio and will display 128x128 pixels - just take a picture of your head and crop it to square

const teamMembers = [
  {
    name: "Logan Chook",
    role: "Fill here",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Jacob Jung",
    role: "Fill here",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Dylan Price",
    role: "Fill here",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Eric Lee",
    role: "Fill here",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Jonathan Joh",
    role: "Fill here",
    image: "/placeholder.svg?height=150&width=150",
  },
];

export default function TeamMembers() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
      <div
        className={`mb-4 grid gap-8 sm:grid-cols-2 ${teamMembers.length <= 5 ? `md:grid-cols-${teamMembers.length}` : `md:grid-cols-4`}`}
      >
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

      <br></br>
      <p className="py-4 text-center text-lg">
        We are a team from Dublin High School who are passionate about
        introducing youths to the field of engineering at an early age to get
        them interested in learning STEM. We introduce our students to the
        different fields of engineering including civil, mechanical, electrical,
        aerospace, and computer science. We reinforce the learning with hands-on
        projects in a team setting to encourage teamwork, leadership, and
        communication skills.
      </p>
      <p className="py-4 text-center text-lg">
        We hope to be able to teach youths of all ages and reach out to students
        in the community who are underserved and have no means to afford STEM
        and engineering programs. We have provided our classes for free at the
        Dublin Library and hope to partner with other institutions where we can
        teach our classes.{" "}
      </p>
      <p className="py-4 text-center text-lg">We thank you for your support!</p>
    </div>
  );
}
