import React from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = (values: unknown) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: unknown) => {
  console.log('Failed:', errorInfo);
};

export const RecoverPasswordUser: React.FC = () => (
  <section className='flex flex-col items-center justify-center m-auto'>
    <h2 className='font-mono text-center text-4xl font-bold text-white mb-5'>Recuperar senha</h2>
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
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Insira um email válido!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" style={{'backgroundColor': 'darkgreen'}} htmlType="submit">
          Recuperar Senha
        </Button>
      </Form.Item>
    </Form>
  </section>
);
