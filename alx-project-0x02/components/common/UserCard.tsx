import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-sm text-gray-600">
        {address.street}, {address.suite}, {address.city} - {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
