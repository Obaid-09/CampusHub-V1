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

export const dummyResources = Array.from(
    { length: 18 },
    (_, index) => ({

        _id: index + 1,
        title: `${subjects[index % subjects.length]} Notes`,
        subject:
            subjects[index % subjects.length],
        courseCode: `CS30${index % 6}`,
        type:
            resourceTypes[index % resourceTypes.length],
        branch: "CSE",
        semester:
            (index % 8) + 1,
        thumbnail:
            "https://placehold.co/600x400",
        downloads:
            Math.floor(Math.random() * 500),
        views:
            Math.floor(Math.random() * 1000),
        bookmarks:
            Math.floor(Math.random() * 200),
        averageRating:
            (4 + Math.random()).toFixed(1),
    })
);