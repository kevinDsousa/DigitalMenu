import React from 'react';
import { Table, Tag, TagProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataType } from '../types/TableProps';



const columns: ColumnsType<DataType> = [
    {
        title: 'Produto',
        dataIndex: 'produto',
        key: 'produto',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Tipo',
        dataIndex: 'tipo',
        key: 'tipo', render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Preço',
        dataIndex: 'preco',
        key: 'preco',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, record) => (
            <>
                {record.tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }

                    const tagProps: TagProps = {
                        color,
                        children: tag.toUpperCase(),
                    };

                    return <Tag {...tagProps} key={tag} />;
                })}
            </>
        ),
    },
    //   {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //       <Space size="middle">
    //         <a>Invite {record.produto}</a>
    //         <a>Delete</a>
    //       </Space>
    //     ),
    //   },
];

const data: DataType[] = [
    {
        key: '1',
        produto: 'Xburger',
        tipo: 'Burger',
        preco: 32.90,
        tags: ['vegano', 'leite'],
    },
    {
        key: '2',
        produto: 'Xsalada',
        tipo: 'Burger',
        preco: 32.90,
        tags: ['vegano', 'leite'],
    },
    {
        key: '3',
        produto: 'Xbacon',
        tipo: 'Burger',
        preco: 32.90,
        tags: ['vegano', 'leite'],
    },
];

export const Produtos: React.FC = () => (
    <Table className="m-auto mt-10 h-screen w-full" columns={columns} dataSource={data} />
);
