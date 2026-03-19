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

    const handleLinkClick = (clickFunction?: () => void) => {
        return () => {
          // Даем время на плавный скролл (1250ms из duration)
          setTimeout(() => {
            if (clickFunction) {
              clickFunction();
            }
          }, 1300); // чуть больше duration
        };
      };


  return (
    <>
      {navText.map((info) => {
        return (
          <li key={info.id}>
            <Link
              to={info.textNav}
              duration={1250}
              smooth={true}
              onClick={handleLinkClick(info.click)} 
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
