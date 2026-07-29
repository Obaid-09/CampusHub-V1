import { useState } from "react";
import Badge from "../ui/Badge";

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const addTag = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    if (!input.trim()) return;

    setTags([...tags, input]);

    setInput("");
  };

  return (
    <div>
      <label className="block mb-2 font-medium">Tags</label>

      <input
        className="w-full border rounded-xl p-3"
        placeholder="Press Enter to add tag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTag}
      />

      <div className="flex gap-2 flex-wrap mt-4">
        {tags.map((tag) => (
          <Badge key={tag}>#{tag}</Badge>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
