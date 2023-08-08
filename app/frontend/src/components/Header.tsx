import { Link } from "react-router-dom";
import { Menu as MenuAnt } from "antd";
import { HomeOutlined, FormOutlined, TableOutlined } from "@ant-design/icons";
import SubMenu from "antd/es/menu/SubMenu";
import { MenuItem } from "../types/MenuItem";

export const Header = () => {
    const items: MenuItem[] = [
        {
            label: "Geral",
            key: "geral",
            to: "/",
            icon: <HomeOutlined />,
        },
        {
            label: "Pedidos",
            key: "pedidos",
            to: "/pedidos",
            icon: <FormOutlined />,
        },
        {
            label: "Cadastrar Produto",
            key: "novoProduto",
            to: "/cadastrar-produto",
            icon: <HomeOutlined />,
        },
        {
            label: "Ver Produtos",
            key: "verProdutos",
            to: "/ver-produtos",
            icon: <TableOutlined />,
        },
    ];

    function generateLinks(items: MenuItem[]): React.ReactNode[] {
        return items.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.label}>
                        {generateLinks(item.children)}
                    </SubMenu>
                );
            }
            
            return (
                <MenuAnt.Item key={item.key}>
                    <Link to={item.to!}>{item.label}</Link>
                </MenuAnt.Item>
            );
        });
    }

    return (
        <MenuAnt
            theme="dark"
            mode="horizontal"
            className="flex items-center justify-center"
        >
            {generateLinks(items)}
        </MenuAnt>
    );
};
