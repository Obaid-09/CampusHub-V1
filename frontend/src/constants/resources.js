const resourceTypes = [
    "Notes",
    "PYQ",
    "Assignment",
    "Lab Manual",
    "Book",
];

const subjects = [
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "OOPS",
    "DSA",
    "Machine Learning",
];

const uploaders = [
    {
        fullname: "Rahul Sharma",
        avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
        fullname: "Ankit Verma",
        avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
        fullname: "Priya Singh",
        avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
        fullname: "Sneha Patel",
        avatar: "https://i.pravatar.cc/150?img=14",
    },
];

const thumbnails = {

    Notes:
    "https://placehold.co/600x800/F8F6F3/C87740?text=Notes",

    PYQ:
    "https://placehold.co/600x800/F8F6F3/2E1F26?text=PYQs",

    Assignment:
    "https://placehold.co/600x800/F8F6F3/2563EB?text=Assignment",

    "Lab Manual":
    "https://placehold.co/600x800/F8F6F3/059669?text=Lab",

    Book:
    "https://placehold.co/600x800/F8F6F3/F59E0B?text=Book",

};

export const dummyResources = Array.from(
    { length: 18 },
    (_, index) => {

        const subject =
            subjects[index % subjects.length];

        const uploader =
            uploaders[index % uploaders.length];

        return {

            _id: String(index + 1),

            title: `${subject} ${resourceTypes[index % resourceTypes.length]}`,

            description:
                `Complete study material for ${subject}. Includes important concepts, diagrams, previous year questions and exam tips.`,

            subject,

            courseCode: `CS30${index % 6}`,

            type:
                resourceTypes[index % resourceTypes.length],

            branch: "CSE",

            semester:
                (index % 8) + 1,

            year: 3,

            college: "NIT Warangal",

            thumbnail:
                        thumbnails[
                            resourceTypes[index % resourceTypes.length]
                        ],

            pdfUrl: "#",

            totalPages:
                80 + Math.floor(Math.random() * 70),

            fileSize:
                `${(4 + Math.random() * 8).toFixed(1)} MB`,

            downloads:
                Math.floor(Math.random() * 3000),

            views:
                Math.floor(Math.random() * 8000),

            bookmarks:
                Math.floor(Math.random() * 500),

            rating:
                Number((4 + Math.random()).toFixed(1)),

            uploadedDate:
                "12 July 2026",

            uploadedBy: {
                ...uploader,
                branch: "CSE",
                year: 3,
                college: "NIT Warangal",
                uploads:
                    20 + Math.floor(Math.random() * 30),
            },

            tags: [
                subject,
                "Semester Notes",
                "Important",
                "Exam",
            ],

            reviews: [

                {
                    id: 1,
                    name: "Aditya",
                    rating: 5,
                    comment:
                        "Excellent notes. Helped a lot during exams.",
                    date: "10 Jul 2026",
                },

                {
                    id: 2,
                    name: "Priya",
                    rating: 4,
                    comment:
                        "Well structured and easy to revise.",
                    date: "08 Jul 2026",
                },
            ],
        };
    }
);