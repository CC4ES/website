import {
  faChildren,
  faGlobe,
  faGlobeAmericas,
  faInfoCircle,
  faLink,
  faMessage,
  faMoneyCheckDollar,
  faMountainCity,
  faScaleUnbalanced,
  faSeedling,
  faStreetView,
  faSun,
  faTreeCity,
  faUsers,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline/index";
import React, { Fragment, useEffect, useState } from "react";
import { classNames } from "../../util/util";
import NavIcon from "./NavIcon";
import type { NavigationItem } from "./NavItem";
import NavItem from "./NavItem";
import NavPopoverButton from "./NavPopoverButton";

const learnItems: NavigationItem[] = [
  {
    name: "About CC4ES",
    description: "How CC4ES began",
    href: "#",
    icon: faInfoCircle,
  },
  {
    name: "About LEARN",
    description: "A brief introduction to each of the CC4ES Six Modules",
    href: "#",
    icon: faInfoCircle,
  },
  {
    name: "The Six Modules",
    description: "",
    href: "#",
    icon: faGlobe,
    subItems: [
      {
        name: "1. Environment Justice & Diversity",
        description: "",
        href: "#",
        icon: faScaleUnbalanced,
      },
      {
        name: "2. Environmental Literacy Fundamentals",
        description: "",
        href: "#",
        icon: faSun,
      },
      {
        name: "3. Sustainable Food Systems",
        description: "",
        href: "#",
        icon: faGlobeAmericas,
      },
      {
        name: "4. Regenerative Technologies",
        description: "",
        href: "#",
        icon: faWind,
      },
      {
        name: "5. Sustainable Business Practices",
        description: "",
        href: "#",
        icon: faMoneyCheckDollar,
      },
      {
        name: "6. Resilient Community & Leadeship Building",
        description: "",
        href: "#",
        icon: faUsers,
      },
    ],
  },
  {
    name: "Trees for Sustainability",
    description:
      "Planting trees for environmental health & community well-being",
    href: "#",
    icon: faTreeCity,
  },
  {
    name: "Additional Resources",
    description: "Links to websites of interest",
    href: "#",
    icon: faLink,
  },
];
const connectItems: NavigationItem[] = [
  { name: "About Connect", description: "", href: "#", icon: faInfoCircle },
  {
    name: "Hope Gardeners",
    description:
      "A forum for school and community gardeners of any size and shape",
    href: "#",
    icon: faSeedling,
  },
  {
    name: "CC4ES Direct",
    description:
      "Direct access to the resources referenced in the Six Modules for practical applications",
    href: "#",
    icon: faStreetView,
  },
  {
    name: "CC4ES Conversation Circles",
    description: "",
    href: "#",
    icon: faMessage,
  },
];
const practiceItems: NavigationItem[] = [
  {
    name: "About Practice",
    description: "CC4ES Programs, Initiatives & On-Ground Cohorts in Practice",
    href: "#",
    icon: faInfoCircle,
  },
  {
    name: "Rhody Grows Hope",
    description:
      "Cultivating regenerative sustainability with one garden at a time",
    href: "#",
    icon: faSeedling,
  },
  {
    name: "Museum of Silenced History & Gardens of Regeneration",
    description:
      "Rebuilding relationships with the land to heal and for regenerative sustainability",
    href: "#",
    icon: faMountainCity,
  },
  {
    name: "Youths for Urban Sustainability, Y4US",
    description:
      "Youth leadership and job skill-set building for regenerative sustainability",
    href: "#",
    icon: faChildren,
  },
];
const allItems: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Learn",
    popover: true,
    popoverItems: learnItems,
  },
  {
    name: "Connect",
    popover: true,
    popoverItems: connectItems,
  },
  {
    name: "Practice",
    popover: true,
    popoverItems: practiceItems,
  },
  {
    name: "Donate",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export default function NavBar() {
  return (
    <Popover className="sticky top-0 bg-lime-100 border-b-4 border-b-amber-600">
      <NavBarDesktop />
      <NavBarMobile />
    </Popover>
  );
}

export function NavBarDesktop() {
  return (
    <div className="px-4 md:px-24">
      <div className="flex flex-wrap items-center justify-between py-6 md:space-x-10">
        <div className="flex shrink-0 justify-start">
          <a href="/">
            <span className="sr-only">CC4ES</span>
            <img className="h-8" src="/cc4es_logo.png" alt="" />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-lime-100 p-2 text-gray-800 hover:bg-lime-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          {allItems.map((item) =>
            item.popover ? (
              <Popover key={item.name} className="relative">
                {({ open }) => (
                  <React.Fragment>
                    <NavPopoverButton open={open} title={item.name} />

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-lime-100 px-5 py-6 sm:gap-8 sm:p-8">
                            {item.popoverItems &&
                              item.popoverItems.map((item) => {
                                return (
                                  <React.Fragment key={item.name}>
                                    {item.subItems && (
                                      <div className="flex flex-col items-start gap-6 p-3">
                                        <p className="mx-auto text-lg font-bold text-gray-900">
                                          {item.name}
                                        </p>
                                        {item.subItems.map((subItem) => (
                                          <NavItem
                                            key={subItem.name}
                                            className="w-full"
                                            item={subItem}
                                          />
                                        ))}
                                      </div>
                                    )}
                                    {!item.subItems && <NavItem item={item} />}
                                  </React.Fragment>
                                );
                              })}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </React.Fragment>
                )}
              </Popover>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="rounded-md bg-lime-100 text-xl font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              >
                {item.name}
              </a>
            )
          )}
        </Popover.Group>
      </div>
    </div>
  );
}

function NavBarMobile() {
  const [panelRef, setPanelRef] = useState<HTMLDivElement | null>(null);
  const lockBody = () => {
    document.body.style.overflowY = "hidden";
  };
  const cleanup = () => {
    document.body.style.overflowY = "initial";
  };

  useEffect(() => {
    if (!panelRef) return;
    const { attributes } = panelRef;
    const openState = attributes.getNamedItem("data-headlessui-state");
    if (!openState) {
      cleanup();
      return;
    }
    if (openState.value === "open") {
      lockBody();
    } else {
      cleanup();
    }

    return () => {
      cleanup();
    };
  }, [panelRef]);

  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        ref={setPanelRef}
        focus
        className="overscroll-contain overflow-y-scroll h-screen absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="/cc4es_logo.png" alt="CC4ES" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {allItems.map((item) =>
                  item.popover ? (
                    <Disclosure key={item.name}>
                      {({ open }) => (
                        <React.Fragment key={item.name}>
                          <Disclosure.Button className="-m-3 flex justify-between items-center rounded-md p-3 hover:bg-gray-50">
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}{" "}
                            </span>
                            <ChevronRightIcon
                              className={classNames(
                                "h-6 w-6",
                                open ? "rotate-90 transform" : ""
                              )}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="ml-4">
                            {item.popoverItems &&
                              item.popoverItems.map((popoverItem) => (
                                <React.Fragment key={popoverItem.name}>
                                  <NavBarMobileItem {...popoverItem} />
                                  {popoverItem.subItems &&
                                    popoverItem.subItems.map((subItem) => (
                                      <div className="ml-4">
                                        <NavBarMobileItem {...subItem} />
                                      </div>
                                    ))}
                                </React.Fragment>
                              ))}
                          </Disclosure.Panel>
                        </React.Fragment>
                      )}
                    </Disclosure>
                  ) : (
                    <NavBarMobileItem key={item.name} {...item} />
                  )
                )}
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}

function NavBarMobileItem(item: NavigationItem) {
  return (
    <a
      key={item.name}
      href={item.href}
      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
    >
      {item.icon && <NavIcon icon={item.icon} size="sm" />}
      <span className="ml-3 text-base font-medium text-gray-900">
        {item.name}
      </span>
    </a>
  );
}
