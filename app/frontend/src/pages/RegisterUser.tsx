import React from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = (values: unknown) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: unknown) => {
  console.log('Failed:', errorInfo);
};

export const RegisterUser: React.FC = () => (
  <>
    <h2>Esqueci a senha</h2>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Você precisa definir um nome de usuário!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Insira um email válido!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Digite sua senha!' }]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Cadastrar usuário
        </Button>
      </Form.Item>
    </Form>
  </>
);
