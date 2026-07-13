import { dummyResources } from "./resources";

export const uploadedResources =
    dummyResources.slice(0, 6);

export const achievements = [

    {
        id: 1,
        title: "First Upload",
        icon: "📚",
        description: "Uploaded first resource",
    },

    {
        id: 2,
        title: "Top Contributor",
        icon: "🏆",
        description: "10+ uploads",
    },

    {
        id: 3,
        title: "1000 Downloads",
        icon: "🔥",
        description: "Resources crossed 1000 downloads",
    },

    {
        id: 4,
        title: "Highly Rated",
        icon: "⭐",
        description: "Average rating above 4.5",
    },

];

export const activities = [

    {
        id: 1,
        type: "upload",
        title: "Uploaded Operating Systems Notes",
        time: "2 hours ago",
    },

    {
        id: 2,
        type: "update",
        title: "Updated DBMS Notes",
        time: "Yesterday",
    },

    {
        id: 3,
        type: "achievement",
        title: "Earned Top Contributor Badge",
        time: "3 days ago",
    },

    {
        id: 4,
        type: "upload",
        title: "Uploaded CN Lab Manual",
        time: "Last Week",
    },

];

export const dummyProfile = {
    fullname: "Obaidullah",
    username: "obaid",
    email: "obaid@nitw.ac.in",
    avatar:
        "https://i.pravatar.cc/300?img=12",
    bio:
        "Pre-final year student at NIT Warangal. Passionate about Full Stack Development, Competitive Programming and AI.",
    branch: "EEE",
    semester: 5,
    year: 3,
    college: "NIT Warangal",
    joined: "July 2026",
    uploads: 26,
    bookmarks: 52,
    downloads: 438,
    reputation: 1260,
};