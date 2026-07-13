import { dummyResources } from "./resources";

export const trendingResources =
    dummyResources.slice(0,5);

export const recommendedResources =
    dummyResources.slice(5,10);

export const dashboardStats = [

    {
        title: "Uploads",
        value: 12,
        color: "text-primary",
    },

    {
        title: "Bookmarks",
        value: 48,
        color: "text-green-600",
    },

    {
        title: "Downloads",
        value: "1.5K",
        color: "text-blue-600",
    },

    {
        title: "Reputation",
        value: "4.8★",
        color: "text-yellow-500",
    },

];

export const recentActivities = [

    {
        id: 1,
        title: "Uploaded DBMS Notes",
        time: "2 hours ago",
    },

    {
        id: 2,
        title: "Bookmarked CN PYQs",
        time: "Yesterday",
    },

    {
        id: 3,
        title: "Downloaded OS Notes",
        time: "2 days ago",
    },

];

export const quickActions = [

    {
        title: "Upload Resource",
        path: "/upload",
    },

    {
        title: "Browse Resources",
        path: "/resources",
    },

    {
        title: "View Bookmarks",
        path: "/dashboard/bookmarks",
    },

];

export const progress = {

    uploads: 12,

    downloads: 1540,

    bookmarks: 48,

    target: 20,

};

// export const trendingResources = [

//     {

//         id:1,

//         title:"Operating Systems Notes",

//         downloads:850,

//         type:"Notes",

//     },

//     {

//         id:2,

//         title:"DBMS PYQs",

//         downloads:620,

//         type:"PYQ",

//     },

//     {

//         id:3,

//         title:"CN Lab Manual",

//         downloads:500,

//         type:"Lab Manual",

//     },

// ];  

// export const recommendedResources = [

//     {

//         id:1,

//         title:"Machine Learning Notes",

//         subject:"ML",

//     },

//     {

//         id:2,

//         title:"OOPS Notes",

//         subject:"OOPS",

//     },

//     {

//         id:3,

//         title:"Operating Systems",

//         subject:"OS",

//     },

// ];

export const upcomingEvents = [

    {

        id:1,

        title:"Mid Semester Exams",

        date:"15 Sept",

    },

    {

        id:2,

        title:"Assignment Submission",

        date:"20 Sept",

    },

];