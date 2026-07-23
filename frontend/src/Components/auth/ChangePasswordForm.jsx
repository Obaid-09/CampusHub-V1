import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import PasswordInput from "./PasswordInput";
import Button from "../ui/Button";

import { authAPI } from "../../api/auth.api";
import { successToast, errorToast } from "../../utils/toast";

const ChangePasswordForm = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      errorToast("Passwords do not match.");
      return;
    }

    if (form.oldPassword === form.newPassword) {
      errorToast("New password must be different from the current password.");
      return;
    }

    try {
      setLoading(true);

      await authAPI.changePassword({
        oldPassword: form.oldPassword,
        newPassword: form.newPassword,
      });

      successToast("Password changed successfully.");

      setForm({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/profile", {
          replace: true,
        });
      }, 1000);
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to change password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AuthHeader
        title="Change Password"
        subtitle="Update your account password."
      />

      <PasswordInput
        label={
          <>
            Current Password
            <span className="text-red-500 ml-1">*</span>
          </>
        }
        placeholder="Enter current password"
        value={form.oldPassword}
        onChange={(e) => handleChange("oldPassword", e.target.value)}
        disabled={loading}
      />

      <PasswordInput
        label={
          <>
            New Password
            <span className="text-red-500 ml-1">*</span>
          </>
        }
        placeholder="Enter new password"
        value={form.newPassword}
        onChange={(e) => handleChange("newPassword", e.target.value)}
        disabled={loading}
      />

      <PasswordInput
        label={
          <>
            Confirm Password
            <span className="text-red-500 ml-1">*</span>
          </>
        }
        placeholder="Confirm new password"
        value={form.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        disabled={loading}
      />

      <Button type="submit" className="w-full h-14" loading={loading}>
        Update Password
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
