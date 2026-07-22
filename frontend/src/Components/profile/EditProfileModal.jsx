import { useEffect, useState } from "react";

import Modal from "../ui/Modal";
import AuthInput from "../auth/AuthInput";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

import useAuth from "../../hooks/useAuth";

import { authAPI } from "../../api/auth.api";

import { successToast, errorToast } from "../../utils/toast";

const branches = [
  { value: "CSE", label: "Computer Science" },
  { value: "ECE", label: "Electronics" },
  { value: "EEE", label: "Electrical" },
  { value: "ME", label: "Mechanical" },
  { value: "CE", label: "Civil" },
];

const semesters = Array.from({ length: 8 }, (_, i) => ({
  value: i + 1,
  label: `Semester ${i + 1}`,
}));

const years = [
  { value: 1, label: "1st Year" },
  { value: 2, label: "2nd Year" },
  { value: 3, label: "3rd Year" },
  { value: 4, label: "4th Year" },
];

const EditProfileModal = ({ open, onClose }) => {
  const { user, refreshUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    branch: "",
    semester: "",
    year: "",
    college: "",
    bio: "",
  });

  useEffect(() => {
    console.log("User from AuthContext:", user);
    if (!user) return;
    setForm({
      fullName: user.fullname || "",
      email: user.email || "",
      branch: user.branch || "",
      semester: user.semester || "",
      year: user.year || "",
      college: user.college || "NIT Warangal",
      bio: user.bio || "",
    });
  }, [user, open]);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,

      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await authAPI.updateProfile({
        fullname: form.fullName,
        email: form.email,
        branch: form.branch,
        semester: form.semester,
        year: form.year,
        college: form.college,
        bio: form.bio,
      });

      await refreshUser();
      successToast("Profile updated successfully.");
      onClose();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Edit Profile">
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          label="Full Name"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          disabled={loading}
        />

        <AuthInput
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          disabled={loading}
        />

        <Select
          label="Branch"
          options={branches}
          value={form.branch}
          onChange={(e) => handleChange("branch", e.target.value)}
          disabled={loading}
        />

        <div className="grid grid-cols-2 gap-4">
          <Select
            label="Semester"
            options={semesters}
            value={form.semester}
            onChange={(e) => handleChange("semester", e.target.value)}
            disabled={loading}
          />

          <Select
            label="Year"
            options={years}
            value={form.year}
            onChange={(e) => handleChange("year", e.target.value)}
            disabled={loading}
          />
        </div>

        <AuthInput
          label="College"
          value={form.college}
          onChange={(e) => handleChange("college", e.target.value)}
          disabled={loading}
        />

        <Textarea
          label="Bio"
          value={form.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
          disabled={loading}
        />

        <div className="flex justify-end gap-4">
          <Button type="button" onClick={onClose} disabled={loading}>
            Cancel
          </Button>

          <Button type="submit" loading={loading}>
            Save Changes
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
