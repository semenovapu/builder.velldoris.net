import { Link } from "react-scroll";

interface NavLinksProps {
  handleClickMarketing?: () => void;
  handleClickWhatWillIget?: () => void;
}

interface navTextDataType {
  id: number;
  text: string;
  textNav: string;
  click?: () => void;
}

function NavLinks({
  handleClickMarketing,
  handleClickWhatWillIget,
}: NavLinksProps) {
  const navText: navTextDataType[] = [
    {
      id: 0,
      text: "О КОМПАНИИ",
      textNav: "about",
      click: undefined,
    },
    {
      id: 1,
      text: "НАШИ ПРОЕКТЫ",
      textNav: "structure",
      click: handleClickWhatWillIget,
    },
    {
      id: 2,
      text: "КОНТАКТЫ",
      textNav: "contacts",
      click: handleClickMarketing,
    },
  ];

  return (
    <>
      {navText.map((info) => {
        return (
          <li key={info.id}>
            <Link
              to={info.textNav}
              duration={1250}
              smooth={true}
              onClick={info.click}
            >
              {info.text}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
