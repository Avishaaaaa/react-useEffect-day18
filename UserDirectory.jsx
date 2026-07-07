import UserProfile from "./UserProfile";

function UserDirectory({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserDirectory;