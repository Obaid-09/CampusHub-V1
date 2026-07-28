import notes from "../assets/thumbnails/notes.jpeg";
import book from "../assets/thumbnails/books.jpeg";
import pyq from "../assets/thumbnails/pyq.jpeg";
import assignment from "../assets/thumbnails/assignment.jpeg";
import presentation from "../assets/thumbnails/presentation.jpeg";
import lab from "../assets/thumbnails/labmanual.jpeg";
import fallback from "../assets/thumbnails/def.png";

const getThumbnail = (resource) => {
    switch (resource.type.toLowerCase()) {
        case "notes":
            return notes;

        case "book":
            return book;

        case "pyq":
            return pyq;

        case "assignment":
            return assignment;

        case "presentation":
            return presentation;

        case "lab manual":
            return lab;

        default:
            return fallback;
    }
};

export default getThumbnail;