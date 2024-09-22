import BookOpen from "@/assets/icons/BookOpen.svg";
import ChartPieSlice from "@/assets/icons/ChartPieSlice.svg";
import ChatsTeardrop from "@/assets/icons/ChatsTeardrop.svg";
import FolderNotch from "@/assets/icons/FolderNotch.svg";
import IdentificationBadge from "@/assets/icons/IdentificationBadge.svg";
import IdentificationCard from "@/assets/icons/IdentificationCard.svg";
import Notebook from "@/assets/icons/Notebook.svg";
import ShoppingBagOpen from "@/assets/icons/ShoppingBagOpen.svg";
import UsersThree from "@/assets/icons/UsersThree.svg";
import Bug from "@/assets/icons/BugBeetle.svg";
import User from "@/assets/icons/User.svg";
import Broadcast from "@/assets/icons/Broadcast.svg";
import Act1 from "@/assets/images/3D05.png";
import Act2 from "@/assets/images/Female05.png";
import Act3 from "@/assets/images/3D08.png";
import Act4 from "@/assets/images/Male07.png";
import Act5 from "@/assets/images/Male11.png";
import Contact1 from "@/assets/images/Female15.png";
import Contact2 from "@/assets/images/Male08.png";
import Contact3 from "@/assets/images/Male06.png";
import Contact4 from "@/assets/images/Female08.png";
import Contact5 from "@/assets/images/Female09.png";
import Contact6 from "@/assets/images/3D03.png";

export const dashboardSidemenuContent = [
  {
    title: "Default",
    icon: ChartPieSlice,
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
    icon: ShoppingBagOpen,
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
    icon: FolderNotch,
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
    icon: BookOpen,
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
    icon: IdentificationCard,
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
    icon: IdentificationBadge,
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
    icon: UsersThree,
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
    icon: Notebook,
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
    icon: ChatsTeardrop,
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

export const notificationGroupContent1 = [
  {
    title: "You have a bug that needs to be fixed.",
    timeStamp: "Just now",
    icon: Bug,
  },
  { title: "New user registered", timeStamp: "59 minutes ago", icon: User },
  {
    title: "You have a bug that needs to be fixed.",
    timeStamp: "12 hours ago",
    icon: Bug,
  },
  {
    title: "Andi Lane subscribed to you",
    timeStamp: "Today, 11:59 AM",
    icon: Broadcast,
  },
];

export const notificationGroupContent2 = [
  {
    title: "You have a bug that needs to be fixed.",
    timeStamp: "Just now",
    icon: Act1,
  },
  { title: "Released a new version", timeStamp: "59 minutes ago", icon: Act2 },
  {
    title: "Submitted a bug",
    timeStamp: "12 hours ago",
    icon: Act3,
  },
  {
    title: "Modified A data in Page X",
    timeStamp: "Today, 11:59 AM",
    icon: Act4,
  },
  {
    title: "Deleted a page in Project X",
    timeStamp: "Feb 2, 2023",
    icon: Act5,
  },
];

export const notificationGroupContent3 = [
  {
    title: "Natali Craig",
    timeStamp: "Just now",
    icon: Contact1,
  },
  { title: "Drew Cano", timeStamp: "59 minutes ago", icon: Contact2 },
  {
    title: "Orlando Diggs",
    timeStamp: "12 hours ago",
    icon: Contact3,
  },
  {
    title: "Andi Lane",
    timeStamp: "Today, 11:59 AM",
    icon: Contact4,
  },
  {
    title: "Kate Morrison",
    timeStamp: "Today, 11:59 AM",
    icon: Contact5,
  },
  {
    title: "Koray Okumus",
    timeStamp: "Today, 11:59 AM",
    icon: Contact6,
  },
];

export const favourites = ["Overview", "Projects"];
export const recents = ["Campaigns", "Documents", "Followers"];
