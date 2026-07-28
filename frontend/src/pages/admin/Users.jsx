import { useState } from "react";
import useAdminUsers from "../../hooks/useAdminUsers";
import AdminLayout from "../../components/admin/AdminLayout";
import UsersToolbar from "../../components/admin/UsersToolbar";
import UsersTable from "../../components/admin/UsersTable";

import UserDetailsModal from "../../components/admin/UserDetailsModal";
import SuspendUserModal from "../../components/admin/SuspendUserModal";
import DeleteUserModal from "../../components/admin/DeleteUserModal";
import PromoteUserModal from "../../components/admin/PromoteUserModal";

const Users = () => {
  const { users, loading, filters, setFilters, pagination, refreshUsers } =
    useAdminUsers();

  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showSuspend, setShowSuspend] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showPromote, setShowPromote] = useState(false);
  const [role, setRole] = useState("Student");

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-secondary">
            Users
          </h1>

          <p className="mt-2 text-gray600">Manage all registered users.</p>
        </div>

        <UsersToolbar filters={filters} setFilters={setFilters} />

        <UsersTable
          users={users}
          loading={loading}
          onView={(user) => {
            setSelectedUser(user);
            setShowDetails(true);
          }}
          onSuspend={(user) => {
            setSelectedUser(user);
            setShowSuspend(true);
          }}
          onDelete={(user) => {
            setSelectedUser(user);
            setShowDelete(true);
          }}
          onPromote={(user) => {
            setSelectedUser(user);
            setRole(user.role);
            setShowPromote(true);
          }}
        />

        <UserDetailsModal
          open={showDetails}
          user={selectedUser}
          onClose={() => setShowDetails(false)}
        />

        <SuspendUserModal
          open={showSuspend}
          onClose={() => setShowSuspend(false)}
          onConfirm={(reason) => {
            setShowSuspend(false);
          }}
        />

        <DeleteUserModal
          open={showDelete}
          onClose={() => setShowDelete(false)}
          onDelete={() => {
            setShowDelete(false);
          }}
        />

        <PromoteUserModal
          open={showPromote}
          role={role}
          setRole={setRole}
          onClose={() => setShowPromote(false)}
          onPromote={() => {
            setShowPromote(false);
          }}
        />
      </div>
    </AdminLayout>
  );
};

export default Users;
