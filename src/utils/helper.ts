import BookOpen from "@/assets/icons/BookOpen.svg";
import ChartPieSlice from "@/assets/icons/ChartPieSlice.svg";
import ChatsTeardrop from "@/assets/icons/ChatsTeardrop.svg";
import FolderNotch from "@/assets/icons/FolderNotch.svg";
import IdentificationBadge from "@/assets/icons/IdentificationBadge.svg";
import IdentificationCard from "@/assets/icons/IdentificationCard.svg";
import Notebook from "@/assets/icons/Notebook.svg";
import ShoppingBagOpen from "@/assets/icons/ShoppingBagOpen.svg";
import UsersThree from "@/assets/icons/UsersThree.svg";

export const dashboardSidemenuContent = [
  {
    title: "Default",
    icon:ChartPieSlice,
    contents: [
      {
        title: "Optical",
      },
      {
        title: "Text  ",
      },
    ],
    url: "/solutions/digitization",
  },
  {
    title: "eCommerce​",
    icon:ShoppingBagOpen,
    contents: [
      {
        title: "Text",
        },
      {
        title: "Speech",
        },
      {
        title: "Voice Over",
        },
    ],
    url: "/solutions/speech",
  },
  {
    title: "Projects",
    icon:FolderNotch,
    contents: [
      {
        title: "Translation",
        },
      {
        title: "Transliteration",
        },
      {
        title: "Transcription",
        },
      {
        title: "Summarization",
        },
      {
        title: "Quiz ",
        },
      {
        title: "Sentiment ",
        },
    ],
    url: "https://www.tarento.com/case-studies/anuvaad-domain-specific-translation-engine-for-the-supreme-court-of-india/",
  },
  {
    title: "Online Courses",
    icon:BookOpen,
    contents: [
      {
        title: "Digital ",
        },
      {
        title: "Enterprise ",
        },
    ],
    url: "",
  },
];

export const pageSidemenuContent = [
  {
    title: "User Profile",
    icon:IdentificationCard,
    contents: [
      {
        title: "Optical  ",
        },
      {
        title: "Text  ",
        },
    ],
    url: "/solutions/digitization",
  },
  {
    title: "Account",
    icon:IdentificationBadge,
    contents: [
      {
        title: "Text",
        },
      {
        title: "Speech",
        },
      {
        title: "Voice ",
        },
    ],
    url: "/solutions/speech",
  },
  {
    title: "Corporate",
    icon:UsersThree,
    contents: [
      {
        title: "Translation",
        },
      {
        title: "Transliteration",
        },
      {
        title: "Transcription",
        },
      {
        title: "Summarization",
        },
      {
        title: "Quiz",
        },
      {
        title: "Sentiment ",
        },
    ],
    url: "https://www.tarento.com/case-studies/anuvaad-domain-specific-translation-engine-for-the-supreme-court-of-india/",
  },
  {
    title: "Blog",
    icon:Notebook,
    contents: [
      {
        title: "Digital ",
        },
      {
        title: "Enterprise ",
        },
    ],
    url: "Social",
  },
  {
    title: "Social",
    icon:ChatsTeardrop,
    contents: [
      {
        title: "Digital ",
        },
      {
        title: "Enterprise",
        },
    ],
    url: "Social",
  },
];
