import { useState } from "react";
import Slider from "./Slider";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);

  const toggleSlider = () => {
    setSliderOpen(!sliderOpen);
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="#about"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                window.scrollTo({
                  top: aboutSection.offsetTop, // Adjust this value as needed
                  behavior: "smooth", // This creates a smooth scroll effect
                });
              }
            }}
          >
            About
          </a>
          <a
            href="#work"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.getElementById("work");
              if (aboutSection) {
                window.scrollTo({
                  top: aboutSection.offsetTop, // Adjust this value as needed
                  behavior: "smooth", // This creates a smooth scroll effect
                });
              }
            }}
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.getElementById("contact");
              if (aboutSection) {
                window.scrollTo({
                  top: aboutSection.offsetTop, // Adjust this value as needed
                  behavior: "smooth", // This creates a smooth scroll effect
                });
              }
            }}
          >
            Contact Me
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div
            className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
            onClick={toggleSlider}
          >
            Edit <span aria-hidden="true">&rarr;</span>
          </div>
        </div>

        {sliderOpen && (
          <Slider open={sliderOpen} onClose={() => setSliderOpen(false)} />
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault();
                    const aboutSection = document.getElementById("about");
                    if (aboutSection) {
                      window.scrollTo({
                        top: aboutSection.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  About
                </a>
                <a
                  href="#work"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault();
                    const workSection = document.getElementById("work");
                    if (workSection) {
                      window.scrollTo({
                        top: workSection.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Work
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Contact Me
                </a>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <div
                    className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
                    onClick={toggleSlider}
                  >
                    Edit <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </div>

              <div className="py-6"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
