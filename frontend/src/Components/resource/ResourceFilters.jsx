import Select from "../ui/Select";
import Button from "../ui/Button";

const branches = [
  { value: "", label: "All Branches" },
  { value: "CSE", label: "CSE" },
  { value: "EEE", label: "EEE" },
  { value: "ECE", label: "ECE" },
  { value: "ME", label: "Mechanical" },
  { value: "CE", label: "Civil" },
];

const semesters = [
  { value: "", label: "All Semesters" },
  ...Array.from({ length: 8 }, (_, i) => ({
    value: i + 1,
    label: `Semester ${i + 1}`,
  })),
];

const resourceTypes = [
  { value: "", label: "All Types" },
  { value: "Notes", label: "Notes" },
  { value: "PYQ", label: "PYQs" },
  { value: "Assignment", label: "Assignments" },
  { value: "Lab Manual", label: "Lab Manuals" },
  { value: "Book", label: "Books" },
];

const ResourceFilters = (props) => {
  const { selectedFilters, setSelectedFilters, onApply, onReset } = props;

  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-6
                space-y-5
                sticky
                top-24
            "
    >
      <h2 className="text-xl font-heading font-semibold text-secondary">
        Filters
      </h2>

      <Select
        label="Branch"
        value={selectedFilters.branch}
        options={branches}
        onChange={(e) =>
          setSelectedFilters((prev) => ({
            ...prev,
            branch: e.target.value,
          }))
        }
      />

      <Select
        label="Semester"
        value={selectedFilters.semester}
        options={semesters}
        onChange={(e) =>
          setSelectedFilters((prev) => ({
            ...prev,
            semester: e.target.value,
          }))
        }
      />

      <Select
        label="Resource Type"
        value={selectedFilters.type}
        options={resourceTypes}
        onChange={(e) =>
          setSelectedFilters((prev) => ({
            ...prev,
            type: e.target.value,
          }))
        }
      />

      {/* <Button
                variant="outline"
                className="w-full"
                onClick={()=>
                    updateFilters({
                        search:"",
                        branch:"",
                        semester:"",
                        type:"",
                        sort:"latest",
                    })
                }
            >
                Reset Filters
            </Button> */}
      <div className="space-y-3">
        <Button className="w-full" onClick={onApply}>
          Apply Filters
        </Button>

        <Button variant="outline" className="w-full" onClick={onReset}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default ResourceFilters;
