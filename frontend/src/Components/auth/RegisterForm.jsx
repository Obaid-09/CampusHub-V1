import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";
import AuthFooter from "./AuthFooter";
import AvatarUpload from "./AvatarUpload";
import TermsCheckbox from "./TermsCheckbox";
import { useState } from "react";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { errorToast } from "../../utils/toast";

const branches = [
  {
    value: "CSE",
    label: "Computer Science",
  },

  {
    value: "ECE",
    label: "Electronics",
  },

  {
    value: "EEE",
    label: "Electrical",
  },

  {
    value: "ME",
    label: "Mechanical",
  },

  {
    value: "CE",
    label: "Civil",
  },
];

const semesters = Array.from(
  {
    length: 8,
  },
  (_, i) => ({
    value: i + 1,

    label: `Semester ${i + 1}`,
  }),
);

const years = [
  {
    value: 1,
    label: "1st Year",
  },

  {
    value: 2,
    label: "2nd Year",
  },

  {
    value: 3,
    label: "3rd Year",
  },

  {
    value: 4,
    label: "4th Year",
  },
];

const RegisterForm = ({ isOn, onSubmit }) => {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    branch: "",
    semester: "",
    year: "",
    college: "",
    bio: "",
    password: "",
    confirmPassword: "",
    avatar: null,
    acceptedTerms: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (!form.acceptedTerms) {
      errorToast("Please accept the Terms of Service.");

      return;
    }

    if (form.password !== form.confirmPassword) {
      errorToast("Passwords do not match.");

      return;
    }
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("username", form.username);
      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("branch", form.branch);
      formData.append("semester", form.semester);
      formData.append("year", form.year);
      formData.append("college", form.college);
      formData.append("bio", form.bio);
      formData.append("password", form.password);
      if (form.avatar) {
        formData.append("avatar", form.avatar);
      }
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthHeader
        title="Create Account"
        subtitle="Join CampusHub and start sharing resources."
      />

      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          label={
            <>
              Username
              <span className="text-red-500 ml-1">*</span>
            </>
          }
          placeholder="Enter username"
          value={form.username}
          onChange={(e) => handleChange("username", e.target.value)}
          disabled={!isOn || loading}
        />

        <AuthInput
          label={
            <>
              Full Name
              <span className="text-red-500 ml-1">*</span>
            </>
          }
          placeholder="Enter full name"
          value={form.fullName}
          onChange={(e) =>
            handleChange(
              "fullName",

              e.target.value,
            )
          }
          disabled={!isOn || loading}
        />

        <AuthInput
          label={
            <>
              Email
              <span className="text-red-500 ml-1">*</span>
            </>
          }
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) =>
            handleChange(
              "email",

              e.target.value,
            )
          }
          disabled={!isOn || loading}
        />

        <Select
          label={
            <>
              Branch
              <span className="text-red-500 ml-1">*</span>
            </>
          }
          options={branches}
          value={form.branch}
          onChange={(e) =>
            handleChange(
              "branch",

              e.target.value,
            )
          }
          disabled={!isOn || loading}
        />

        <div className="grid grid-cols-2 gap-4">
          <Select
            label={
              <>
                Semester
                <span className="text-red-500 ml-1">*</span>
              </>
            }
            options={semesters}
            value={form.semester}
            onChange={(e) =>
              handleChange(
                "semester",

                e.target.value,
              )
            }
            disabled={!isOn || loading}
          />

          <Select
            label={
              <>
                Year
                <span className="text-red-500 ml-1">*</span>
              </>
            }
            options={years}
            value={form.year}
            onChange={(e) =>
              handleChange(
                "year",

                e.target.value,
              )
            }
            disabled={!isOn || loading}
          />
        </div>

        <AuthInput
          label="College"
          placeholder="NIT Warangal"
          value={form.college}
          onChange={(e) =>
            handleChange(
              "college",

              e.target.value,
            )
          }
          disabled={!isOn || loading}
        />

        <Textarea
          label="Bio"
          placeholder="Tell us about yourself..."
          value={form.bio}
          onChange={(e) =>
            handleChange(
              "bio",

              e.target.value,
            )
          }
          disabled={!isOn || loading}
        />

        <AvatarUpload
          file={form.avatar}
          onChange={(file) =>
            handleChange(
              "avatar",

              file,
            )
          }
          disabled={!isOn || loading}
        />

        <PasswordInput
          label={
            <>
              Password
              <span className="text-red-500 ml-1">*</span>
            </>
          }
          placeholder="Create password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          disabled={!isOn || loading}
        />

        <PasswordInput
          label={
            <>
              Confirm Password
              <span className="text-red-500 ml-1">*</span>
            </>
          }
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          disabled={!isOn || loading}
        />

        <TermsCheckbox
          checked={form.acceptedTerms}
          onChange={(e) =>
            handleChange(
              "acceptedTerms",

              e.target.checked,
            )
          }
        />

        <Button
          type="submit"
          loading={loading}
          className="w-full h-14 text-lg"
          disabled={!isOn || !form.acceptedTerms}
        >
          Create Account
        </Button>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10" />

          <span className="text-gray400">OR</span>

          <div className="flex-1 h-px bg-white/10" />
        </div>

        <SocialLogin disabled={!isOn || loading} />

        <AuthFooter
          text="Already have an account?"
          linkText="Login"
          to="/login"
        />
      </form>
    </>
  );
};

export default RegisterForm;
