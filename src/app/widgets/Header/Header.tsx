import { Flex } from "antd";
import NextLink from "next/link";
import Title from "antd/es/typography/Title";
import Link from "antd/es/typography/Link";
import "./Header.css";

interface HeaderProps {
    logo: string;
    navMenu: string[];
}

const Header: React.FC<HeaderProps> = ({ logo, navMenu }) => {
    return (
        <header>
            <Flex justify="space-between" align="center" className="tenex-header">
                <Title level={3}>
                    {logo}
                </Title>
                <Flex gap={8}>
                    {navMenu.map((item, index) => (
                        <NextLink key={index} href={`#${item}`}>
                            <Link>{item}</Link>
                        </NextLink>
                    ))}
                </Flex>
            </Flex>
        </header>
    );
}

export default Header;