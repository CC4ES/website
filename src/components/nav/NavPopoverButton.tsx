import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid/index";
import { classNames } from "../../util/util";

export default function NavPopoverButton({
  title,
  open,
}: {
  title: string;
  open: boolean;
}) {
  return (
    <Popover.Button
      className={classNames(
        open ? "text-blue-500" : "text-gray-900",
        "group inline-flex items-center rounded-md bg-lime-100 text-xl font-medium hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
      )}
    >
      <span>{title}</span>
      <ChevronDownIcon
        className={classNames(
          open ? "text-blue-500" : "text-gray-900",
          "ml-2 h-5 w-5 group-hover:text-blue-500"
        )}
        aria-hidden="true"
      />
    </Popover.Button>
  );
}
