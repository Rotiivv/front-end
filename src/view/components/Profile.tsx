interface ProfileProps {
  name: string | undefined;
  email: string | undefined;
}

const Profile = ({ name, email }: ProfileProps) => {
  return (
    <div className="bg-[#F3F4F6] items-center break-all rounded-xl border border-[#dfe0e4] p-2 flex gap-2">
      <div>
        <div className="rounded-full bg-white p-0.5 shadow-md">
          <div className="rounded-full w-7 h-7 bg-[#00ADB5] p-1 flex items-center justify-center text-white font-bold">
            {name ? name[0].toUpperCase() : "User"}
          </div>
        </div>
      </div>
      <div className="text-xs">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default Profile;
