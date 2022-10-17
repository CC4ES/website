import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { classNames } from "../../util/util";
import NavIcon from "./NavIcon";

export interface NavigationItem {
  name: string;
  description?: string;
  href?: string;
  popover?: boolean;
  popoverItems?: NavigationItem[];
  icon?: IconProp;
  subItems?: NavigationItem[];
}

interface Props {
  item: NavigationItem;
  className?: string;
}

export default function NavItem({ item, className }: Props) {
  return (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        "-m-3 flex items-start rounded-lg p-3 hover:bg-lime-50",
        className
      )}
    >
      {item.icon && <NavIcon icon={item.icon} />}
      <div className="ml-4">
        <p className="text-base font-medium text-gray-900">{item.name}</p>
        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
      </div>
    </a>
  );
}
