import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import UserContext from "./Context";

export default function Slider() {
  const [open, setOpen] = useState(true);

  const { name, setName } = useContext(UserContext);
  const { desc, setDesc } = useContext(UserContext);
  const { profilePic, setProfilePic } = useContext(UserContext);
  const { work, setWork } = useContext(UserContext);

  const [addingNewWork, setAddingNewWork] = useState(false);
  const [newWorkTitle, setNewWorkTitle] = useState("");
  const [newPath, setNewPath] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newType, setNewType] = useState("");

  const handleRemoveWork = (index) => {
    const updatedWork = [...work];
    updatedWork.splice(index, 1);
    setWork(updatedWork);
  };

  const handleAddNewWork = () => {
    const newWorkItem = {
      title: newWorkTitle,
      path: newPath,
      date: newDate,
      type: newType,
    };

    setWork([...work, newWorkItem]);

    setNewWorkTitle("");
    setNewPath("");
    setNewDate("");
    setNewType("");
    setAddingNewWork(false);
  };

  const handleTip = () => {
    alert(
      "Tip for adding image links when the image is on Google Drive\n1. Upload the image to GDrive\n2. Make the image public in +Share\n3. You will get a URL like : [https://drive.google.com/file/d/FILE_ID/view?usp=drive_link]\n4. Change it to: [https://drive.google.com/uc?id=FILE_ID]"
    );
  };

  const handleGenerateWebsite = () => {
    const userEmail = prompt("Enter your email to send a zip file of the website");

    if (userEmail !== null && userEmail.trim() !== "") {
      alert(`You entered the following email address: ${userEmail}`);
    } else {
      alert("You did not enter a valid email address.");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWorkFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPath(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Edit Website
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 mt-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={desc}
                            onChange={(e) => setDesc(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="profile-pic"
                          className="mt-5 block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Profile Pic
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="file"
                            name="profile-pic"
                            id="profile-pic"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="company"
                          className="mt-5 block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Work
                        </label>
                        <div className="mt-2.5">
                          {work.map((item, index) => (
                            <div
                              key={index}
                              className="mt-2 flex items-center justify-between"
                            >
                              <span className="text-gray-900">
                                {item.title}
                              </span>
                              <button
                                onClick={() => handleRemoveWork(index)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <TrashIcon className="h-5 w-5" />
                              </button>
                            </div>
                          ))}
                          {addingNewWork ? (
                            <div className="mt-2.5">
                              <label
                                htmlFor="message"
                                className="block text-sm font-semibold leading-6 text-gray-900 mb-2.5"
                              >
                                Add New Work
                              </label>
                              <input
                                type="text"
                                name="new-work-title"
                                id="new-work-title"
                                placeholder="Title"
                                value={newWorkTitle}
                                onChange={(e) => setNewWorkTitle(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                              <input
                                type="text"
                                name="new-path"
                                id="new-path"
                                placeholder="Drive Link or Choose from below"
                                value={newPath}
                                onChange={(e) => setNewPath(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                              <input
                                type="file"
                                name="work-image-upload"
                                id="work-image-upload"
                                accept="image/*"
                                onChange={handleWorkFileUpload}
                                className="mb-2 block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                              />
                              <input
                                type="text"
                                name="new-date"
                                id="new-date"
                                placeholder="Date"
                                value={newDate}
                                onChange={(e) => setNewDate(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                              <input
                                type="text"
                                name="new-type"
                                id="new-type"
                                placeholder="Type"
                                value={newType}
                                onChange={(e) => setNewType(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                              <div className="flex justify-end">
                                <button
                                  onClick={handleAddNewWork}
                                  className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Add
                                </button>
                                <button
                                  onClick={() => setAddingNewWork(false)}
                                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => setAddingNewWork(true)}
                              className="mt-2.5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <PlusIcon className="h-5 w-5 mr-2" />
                              Add New Work
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="sm:col-span-2 mt-2">
                        <button
                          onClick={handleGenerateWebsite}
                          className="inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Generate Website
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
