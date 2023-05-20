import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { useAuth } from "../../contexts/auth";
import LanguageDropdown from "@/components/navbar/LanguageDropdown";
import { useTranslation } from "next-i18next";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "nav.home", href: "/", current: false },
  { name: "nav.projects", href: "/projects", current: false },
  { name: "nav.contact", href: "/contact-us", current: false },
];

export default function Navbar() {
  const { t } = useTranslation();

  const router = useRouter();
  const { signUp, signupError, signupLoading, isAuthenticated, logout, user } =
    useAuth();

  const renderNavigation = () => {
    return navigation.map((item) => {
      return (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "inline-flex items-center px-1 pt-1 text-md font-medium md:mx-4 border-b-4",
            {
              "border-secondary text-secondary ": router.pathname === item.href,
            },
            {
              "text-white border-primary  ": router.pathname !== item.href,
            }
          )}
        >
          {t(item.name)}
        </Link>
      );
    });
  };

  const renderMobileNavigation = () => {
    return navigation.map((item) => {
      return (
        <Disclosure.Button
          key={item.name}
          as={Link}
          href={item.href}
          className={cn(
            {
              "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6":
                router.pathname !== item.href,
            },
            {
              "block border-l-4 border-primary bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-primary sm:pl-5 sm:pr-6":
                router.pathname === item.href,
            }
          )}
        >
          {t(item.name)}
        </Disclosure.Button>
      );
    });
  };

  return (
    <Disclosure as="nav" className="bg-primary shadow sticky top-0 z-40">
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-16 w-auto lg:hidden"
                    src="/logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 w-auto lg:block"
                    src="/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:mx-6 md:flex">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {renderNavigation()}
                  {/* <h1>{t("HELLO_WORLD")}</h1> */}
                </div>
              </div>
              <div className="flex items-center">
                <div className="md:mx-5 hidden md:block">
                  <LanguageDropdown />
                </div>
                {!isAuthenticated && (
                  <>
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="relative inline-flex items-center gap-x-1.5 rounded-3xl px-5 py-2 text-sm font-semibold text-white hover:text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-white border mx-3"
                      >
                        <Link href={"/sign-in"}> {t("nav.sign-in")}</Link>
                      </button>
                    </div>
                    <div className="flex-shrink-0">
                      <Link href={"/sign-up"}>
                        <button
                          type="button"
                          className="relative inline-flex items-center gap-x-1.5 rounded-3xl  px-5 py-2 text-sm font-semibold text-primary hover:text-primary shadow-sm bg-secondary hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-primary"
                        >
                          {t("nav.sign-up")}
                        </button>
                      </Link>
                    </div>
                  </>
                )}

                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* Profile dropdown */}
                  {isAuthenticated && (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="/images/navbar/user.png"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {user?.username}
                              </a>
                            )}
                          </Menu.Item>

                          {isAuthenticated && (
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                  onClick={() => {
                                    if (!logout) return;
                                    logout();
                                  }}
                                >
                                  {t("nav.sign-out")}
                                </a>
                              )}
                            </Menu.Item>
                          )}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </div>
              </div>
            </div>
          </div>

          {
            <Disclosure.Panel className="md:hidden pb-1">
              <div className="space-y-1 pb-3 pt-2">
                {renderMobileNavigation()}
              </div>
              <div className="mb-4 w-full flex">
                <div className="ml-auto mr-4 ">
                  <LanguageDropdown />
                </div>
              </div>
              {isAuthenticated && (
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="/images/navbar/user.png"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-300">
                        {user?.username}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {user?.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {
                      <Disclosure.Button
                        as="div"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                        onClick={() => {
                          if (!logout) return;
                          logout();
                        }}
                      >
                        Sign out
                      </Disclosure.Button>
                    }
                  </div>
                </div>
              )}
            </Disclosure.Panel>
          }
        </>
      )}
    </Disclosure>
  );
}
