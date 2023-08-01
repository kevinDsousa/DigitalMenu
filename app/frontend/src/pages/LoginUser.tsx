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
   <div className='flex flex-col gap-2 items-center justify-center m-auto'>
      <h2 className='font-mono text-center text-4xl font-bold text-white mb-5'>Seja bem vindo</h2>
      <Form
         name="basic"
         labelCol={{ span: 8 }}
         wrapperCol={{ span: 16 }}
         style={{ maxWidth: 600 }}
         initialValues={{ remember: true }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         autoComplete="on"
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
            <Button type="primary" style={{'background-color': 'darkgreen'}} block htmlType="submit" >
               Logar
            </Button>
         </Form.Item>

         <div className='flex'>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Link to="/register-user">
                     <span className='text-sm text-white'>Novo usuário?</span>
               </Link>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Link to="/recover-password">
                     <span className='text-sm text-white'>Joguei a senha no mato</span>
               </Link>
            </Form.Item>
         </div>
      </Form>
   </div>
);