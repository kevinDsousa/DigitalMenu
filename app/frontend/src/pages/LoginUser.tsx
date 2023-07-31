import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values: unknown) => {
   console.log('Success:', values);
};

const onFinishFailed = (errorInfo: unknown) => {
   console.log('Failed:', errorInfo);
};

export const LoginUser: React.FC = () => (
   <div className='flex flex-col gap-2'>
      <h2 className='font-mono text-center text-2xl font-bold'>Seja bem vindo</h2>
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
            label="Usuário"
            name="username"
            rules={[{ required: true, message: 'Necessário inserir nome de usuário!' }]}
         >
            <Input />
         </Form.Item>

         <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Necessário inserir a senha!' }]}
         >
            <Input.Password />
         </Form.Item>

         <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Manter Logado</Checkbox>
         </Form.Item>

         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
               Logar
            </Button>
         </Form.Item>

         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Link to="/register-user">
                  Novo usuário?
            </Link>
         </Form.Item>

         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Link to="/recover-password">
                  Joguei a senha no mato
            </Link>
         </Form.Item>
      </Form>
   </div>
);