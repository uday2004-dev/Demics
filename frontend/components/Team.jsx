import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTeam } from "../api/team";
import { FaPlus } from "react-icons/fa";

const Team = () => {
  const navigate = useNavigate();

  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    try {
      const res = await getTeam();

      setTeams(res.data.teams || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-medium">
          Team
        </h1>

        <button
          onClick={() =>
            navigate("/sideBar/team/teamCreate")
          }
          className="bg-purple-600 hover:bg-purple-700 w-12 h-12 rounded-lg flex items-center justify-center"
        >
          <FaPlus />
        </button>
      </div>

      {/* Empty State */}
      {teams.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-gray-400">
            No Team Members Found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((member) => (
            <div key={member._id}>
              {/* Image */}
              <div className="h-[240px] rounded-2xl overflow-hidden bg-purple-600">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="mt-4">
                <h2 className="text-2xl font-medium">
                  {member.name}
                </h2>

                <p className="text-gray-400 text-sm">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;