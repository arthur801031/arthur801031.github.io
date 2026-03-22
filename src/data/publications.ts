export interface Publication {
  title: string;
  authors: string; // use <u> tags to underline your name
  venue: string;
  year: number;
  gif?: string; // path to GIF in /public/gifs/
  links: { label: string; url: string }[];
  highlight?: boolean; // feature on top
}

// Add new publications at the top of this array
export const publications: Publication[] = [
  {
    title:
      "CLAMP: Contrastive Learning for 3D Multi-View Action-Conditioned Robotic Manipulation Pretraining",
    authors:
      "<u>I-Chun Arthur Liu</u>, Krzysztof Choromanski, Sandy Huang, Connor Schenck",
    venue: "Under Review",
    year: 2025,
    gif: "/gifs/clamp_small.gif",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2602.00937" },
    ],
  },
  {
    title:
      "ROPA: Synthetic Robot Pose Generation for RGB-D Bimanual Data Augmentation",
    authors:
      "Jason Chen, <u>I-Chun Arthur Liu</u>, Gaurav S. Sukhatme, Daniel Seita",
    venue: "International Conference on Robotics and Automation (ICRA), 2026",
    year: 2026,
    gif: "/gifs/ropa.gif",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2509.19454" },
      { label: "Project", url: "https://ropaaug.github.io/" },
    ],
  },
  {
    title:
      "D-CODA: Diffusion for Coordinated Dual-Arm Data Augmentation",
    authors:
      "<u>I-Chun Arthur Liu</u>, Jason Chen, Gaurav S. Sukhatme, Daniel Seita",
    venue: "Conference on Robot Learning (CoRL), 2025",
    year: 2025,
    gif: "/gifs/d-coda_small.gif",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2505.04860" },
      { label: "Code", url: "https://github.com/dcodaaug/dcoda" },
      { label: "Project", url: "https://dcodaaug.github.io/D-CODA/" },
    ],
  },
  {
    title:
      "VoxAct-B: Voxel-Based Acting and Stabilizing Policy for Bimanual Manipulation",
    authors:
      "<u>I-Chun Arthur Liu</u>, Sicheng He, Daniel Seita<strong>†</strong>, Gaurav S. Sukhatme<strong>†</strong>",
    venue: "Conference on Robot Learning (CoRL), 2024",
    year: 2024,
    gif: "/gifs/voxact-b_small.gif",
    links: [
      { label: "arXiv", url: "https://arxiv.org/pdf/2407.04152v1" },
      { label: "Code", url: "https://github.com/VoxAct-B/voxactb" },
      { label: "Project", url: "https://voxact-b.github.io/" },
      {
        label: "Poster",
        url: "/files/voxact-b-poster.pdf",
      },
    ],
  },
  {
    title:
      "Learning Robot Manipulation from Cross-Morphology Demonstration",
    authors:
      "Gautam Salhotra<strong>*</strong>, <u>I-Chun Arthur Liu</u><strong>*</strong>, Gaurav S. Sukhatme",
    venue: "Conference on Robot Learning (CoRL), 2023",
    year: 2023,
    gif: "/gifs/mail_small.gif",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2304.03833" },
      { label: "Code", url: "https://github.com/uscresl/mail" },
      { label: "Project", url: "https://uscresl.github.io/mail/" },
      {
        label: "Poster",
        url: "/files/mail-poster.pdf",
      },
    ],
  },
  {
    title:
      "Learning Deformable Object Manipulation from Expert Demonstrations",
    authors:
      "Gautam Salhotra<strong>*</strong>, <u>I-Chun Arthur Liu</u><strong>*</strong>, Marcus Dominguez-Kuhne, Gaurav S. Sukhatme",
    venue: "IEEE Robotics and Automation Letters (RA-L) & IROS 2022",
    year: 2022,
    gif: "/gifs/dmfd_small.gif",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2207.10148" },
      { label: "Code", url: "https://github.com/uscresl/dmfd" },
      { label: "Project", url: "https://uscresl.github.io/dmfd/" },
      {
        label: "Poster",
        url: "/files/dmfd-poster.pdf",
      },
      { label: "DOI", url: "https://doi.org/10.1109/LRA.2022.3187843" },
    ],
  },
  {
    title:
      "Distilling Motion Planner Augmented Policies into Visual Control Policies for Robot Manipulation",
    authors:
      "<u>I-Chun Arthur Liu</u><strong>*</strong>, Shagun Uppal<strong>*</strong>, Gaurav S. Sukhatme, Joseph J. Lim, Peter Englert, Youngwoon Lee",
    venue: "Conference on Robot Learning (CoRL), 2021",
    year: 2021,
    gif: "/gifs/mopa-pd_small.gif",
    links: [
      {
        label: "arXiv",
        url: "https://arxiv.org/abs/2111.06383",
      },
      { label: "Code", url: "https://github.com/clvrai/mopa-pd" },
      { label: "Project", url: "https://clvrai.github.io/mopa-pd/" },
      {
        label: "Poster",
        url: "/files/mopa-pd-poster.pdf",
      },
    ],
  },
];
