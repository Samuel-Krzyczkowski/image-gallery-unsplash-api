// src/components/Header.js

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

// Page Links
const navigation = [
  { name: "Home", href: "/" },
  { name: "Search", href: "/search" },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Header(props) {
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-14 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}

                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  {/* End of mobile menu button*/}
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                  {/* Unsplash logo */}
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/1024px-Logo_of_Unsplash.svg.png"
                        alt="Your Company"
                      />
                    </a>
                    <a href="/">
                      <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/1024px-Logo_of_Unsplash.svg.png"
                      alt="Your Company"
                      />
                    </a>
                    {/* End of Unsplash logo */}
                  </div>

                  {/* Mobile menu */}
                  <div className="hidden sm:ml-6 sm:block ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              " px-3 py-2 rounded-[2px] text-sm font-medium no-underline " +
                              (isActive
                                ? " no-underline bg-black text-white "
                                : " no-underline text-black hover:bg-gray-900 hover:text-white ")
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  {/* End of Mobile menu */}
                </div>
              </div>
            </div>

            {/* Menu */}              
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "block px-3 py-2 rounded-md text-base font-medium no-underline " +
                        (isActive
                          ? " no-underline bg-black text-white "
                          : " no-underline text-gray-300 hover:bg-black hover:text-white ")
                      );
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
            {/* End of Menu */} 
          </>
        )}
      </Disclosure>
      <div className="bg-white">
        <div className="">
          {props.children}
        </div>
      </div>
    </>
  );
}
