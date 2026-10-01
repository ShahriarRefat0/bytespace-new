export interface Instructor {
  id: string;

  name: string;

  avatar: string;

  role: string;

  bio: string;
}

export const instructors: Instructor[] = [
  {
    id: "purepearl-studio",

    name: "PurePearl Studio",

    avatar: "/instructors/purepearl.png",

    role: "Professional Creator",

    bio: "PurePearl Studio is a professional creative team focused on digital design and creative production.",
  },
];