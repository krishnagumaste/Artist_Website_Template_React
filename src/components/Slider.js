import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import UserContext from "./Context";
import { useContext } from "react";

export default function Slider() {
  const [open, setOpen] = useState(true);

  const { name, setName } = useContext(UserContext);
  const { desc, setDesc } = useContext(UserContext);
  const { profilePic, setProfilePic } = useContext(UserContext);
  const { work, setWork } = useContext(UserContext);

  const [pic, setPic] = useState("");

  const handlePic = (e) => {
    setPic(e.target.value);
  };

  const updatePic = () => {
    setProfilePic(pic);
  };

  const [addingNewWork, setAddingNewWork] = useState(false);
  const [newWorkTitle, setNewWorkTitle] = useState("");
  const [newPath, setNewPath] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newType, setNewType] = useState("");

  const handleRemoveWork = (index) => {
    // Remove a work item from the array
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
    setNewWorkTitle("");
    setNewDate("");
    setNewType("");
  };

  const handleTip = () => {
    alert(
      "Tip for adding image links when the image is the Google Drive\n1. Upload image to GDrive\n2. Make image public access in +Share\n3. You will get the url like : [https://drive.google.com/file/d/FILE ID/view?usp=drive_link]\n4. Make it like : [https://drive.google.com/uc?id=FILE ID]"
    );
  };

  const handleGenerateWebsite = () => {
    const userEmail = prompt(
      "Enter your email to send a zip file of the website"
    );

    if (userEmail !== null && userEmail.trim() !== "") {
      alert(`You entered the following email address: ${userEmail}`);
    } else {
      alert("You did not enter a valid email address.");
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
                        <span>
                          <div
                            className="text-red-500 hover:cursor-pointer"
                            onClick={handleTip}
                          >
                            Tip
                          </div>
                        </span>
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
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
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
                            onChange={(e) => {
                              setDesc(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="company"
                          className="mt-5 block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Profile Pic Link
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="organization"
                            defaultValue={profilePic}
                            onChange={handlePic}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          <button
                            type="button"
                            onClick={updatePic}
                            className="mt-4 rounded-md bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                          >
                            Update Profile Pic
                          </button>
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
                              <div className="mb-2.5">
                                <input
                                  type="text"
                                  placeholder="New Work Title"
                                  value={newWorkTitle}
                                  onChange={(e) =>
                                    setNewWorkTitle(e.target.value)
                                  }
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                              <div className="mb-2.5">
                                <input
                                  type="text"
                                  placeholder="Work Image Link"
                                  value={newPath}
                                  onChange={(e) => setNewPath(e.target.value)}
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                              <div className="mb-2.5">
                                <input
                                  type="text"
                                  placeholder="Jan 01, 2023"
                                  value={newDate}
                                  onChange={(e) => setNewDate(e.target.value)}
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                              <div className="mb-2.5">
                                <input
                                  type="text"
                                  placeholder="Macro, Telephoto, Portrait..."
                                  value={newType}
                                  onChange={(e) => setNewType(e.target.value)}
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                              <button
                                onClick={handleAddNewWork}
                                className="mt-2 ml-2 rounded-md bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                              >
                                Add
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setAddingNewWork(true)}
                              className="mt-2.5 rounded-md bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                            >
                              <PlusIcon className="h-5 w-5 mr-1 inline" />
                              Add New Work
                            </button>
                          )}
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={handleGenerateWebsite}
                          className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
