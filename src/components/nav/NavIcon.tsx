import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames } from "../../util/util";

interface Props {
  icon: IconProp;
  size?: "sm" | "md" | "lg";
}
export default function NavIcon({ icon, size = "md" }: Props) {
  const sizeClass =
    size === "sm" ? "h-4 w-4" : size === "md" ? "h-6 w-6" : "h-8 w-8";
  return (
    <FontAwesomeIcon
      className={classNames(sizeClass, "flex-shrink-0 text-green-700")}
      icon={icon}
    />
  );
}
