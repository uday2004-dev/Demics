import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getService, updateService } from "../api/servicesApi";
import { MdArrowBack, MdSave } from "react-icons/md";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [oldPhoto, setOldPhoto] = useState("");
  const [photo, setPhoto] = useState(null);

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      setLoading(true);

      const res = await getService(id);

      if (res.data.success) {
        const service = res.data.service;

        setName(service.name || "");
        setDescription(service.description || "");
        setOldPhoto(service.photo || "");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);

      if (photo) {
        formData.append("photo", photo);
      }

      const res = await updateService(id, formData);

      if (res.data.success) {
        alert(res.data.message);
        navigate("/sideBar/services");
      }
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to update service"
      );
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">
          Loading service...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen p-6 md:p-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-white text-3xl font-semibold">
            Edit Service
          </h1>

          <p className="text-gray-400 mt-1">
            Update your service details
          </p>
        </div>

        <button
          onClick={() => navigate("/sideBar/services")}
          className="
            flex
            items-center
            gap-2
            border
            border-purple-500
            text-purple-400
            hover:bg-purple-500
            hover:text-white
            px-5
            py-3
            rounded-full
            cursor-pointer
            transition
          "
        >
          <MdArrowBack size={20} />
          Back
        </button>

      </div>

      {/* Main Form */}
      <div className="max-w-4xl">

        <form
          onSubmit={handleUpdate}
          className="
            bg-[#151515]
            border
            border-purple-500/30
            rounded-2xl
            p-5
            md:p-8
            shadow-[0_0_15px_rgba(168,85,247,0.12)]
          "
        >

          {/* Service Name */}
          <div className="mb-6">

            <label className="block text-white mb-2">
              Service Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter service name"
              required
              className="
                w-full
                bg-black
                border
                border-gray-700
                focus:border-purple-500
                outline-none
                text-white
                rounded-lg
                px-4
                py-3
                transition
              "
            />

          </div>

          {/* Description */}
          <div className="mb-6">

            <label className="block text-white mb-2">
              Service Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter service description"
              rows={5}
              required
              className="
                w-full
                bg-black
                border
                border-gray-700
                focus:border-purple-500
                outline-none
                text-white
                rounded-lg
                px-4
                py-3
                resize-none
                transition
              "
            />

          </div>

          {/* Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {/* Current Image */}
            <div>

              <label className="block text-white mb-3">
                Current Image
              </label>

              <div
                className="
                  h-[250px]
                  rounded-xl
                  overflow-hidden
                  bg-black
                  border
                  border-gray-800
                "
              >
                {oldPhoto ? (
                  <img
                    src={oldPhoto}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No image available
                  </div>
                )}
              </div>

            </div>

            {/* Change Image */}
            <div>

              <label className="block text-white mb-3">
                Change Image
              </label>

              <div
                className="
                  h-[250px]
                  bg-black
                  border
                  border-dashed
                  border-gray-700
                  hover:border-purple-500
                  rounded-xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  p-5
                  transition
                "
              >

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setPhoto(e.target.files[0])
                  }
                  className="
                    w-full
                    text-gray-400
                    cursor-pointer
                  "
                />

                <p className="text-gray-500 text-sm mt-4 text-center">
                  Select a new image only if you want
                  to replace the current one.
                </p>

              </div>

            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">

            <button
              type="button"
              onClick={() =>
                navigate("/sideBar/services")
              }
              className="
                flex-1
                border
                border-gray-700
                text-gray-300
                hover:bg-gray-800
                py-3
                rounded-lg
                cursor-pointer
                transition
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={updating}
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                bg-purple-600
                hover:bg-purple-700
                disabled:opacity-50
                text-white
                py-3
                rounded-lg
                cursor-pointer
                transition
              "
            >
              <MdSave size={20} />

              {updating
                ? "Updating..."
                : "Update Service"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditService;