import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Vinayak Pandey",
    email: "vinayakpandey@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Srishti Singh",
    email: "srishti@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
