import { Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

export const Cadastrar = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Form
            name="produtoForm"
            onFinish={onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            initialValues={{ tipo: 'selecione' }}
            className="flex flex-col mt-5"
        >
            <Form.Item
                label="Nome do Produto"
                name="nomeProduto"
                rules={[{ required: true, message: 'Por favor, insira o nome do produto!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Tipo do Produto"
                name="tipo"
                rules={[{ required: true, message: 'Por favor, selecione o tipo do produto!' }]}
            >
                <Select>
                    <Option value="selecione">Selecione</Option>
                    <Option value="tipo1">Tipo 1</Option>
                    <Option value="tipo2">Tipo 2</Option>
                    <Option value="tipo3">Tipo 3</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Imagem"
                name="imagem"
                rules={[{ required: true, message: 'Por favor, faça o upload da imagem!' }]}
            >
                <Upload>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                label="Preço"
                name="preco"
                rules={[
                    { required: true, message: 'Por favor, insira o preço do produto!' },
                    { type: 'number', message: 'Insira um valor numérico válido!' },
                ]}
            >
                <Input type="number" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                <Button type="primary" htmlType="submit">
                    Cadastrar
                </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                <Button className="bg-green-600 w-full" type="primary" htmlType="submit">
                    Cadastrar
                </Button>
            </Form.Item>
        </Form>
    );
};
