import { Flex } from "antd";
import Link from "next/link";
import "./Header.css";

interface HeaderProps {
    logo: string;
    navMenu: string[];
}

const Header: React.FC<HeaderProps> = ({ logo, navMenu }) => {
    return (
        <header>
            <Flex justify="space-between" align="center" className="tenex-header">
                <h1>
                    {logo}
                </h1>
                <Flex gap={8}>
                    {navMenu.map((item, index) => (
                        <Link key={index} href={`#${item}`}>
                            {item}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </header>
    );
}

export default Header;