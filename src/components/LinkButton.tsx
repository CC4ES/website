interface Props extends React.PropsWithChildren {
  href?: string;
  onClick?: () => void;
}

export default function LinkButton(props: Props) {
  const { href, children, onClick } = props;
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex justify-center cursor-pointer py-2 px-3 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      {children}
    </a>
  );
}
