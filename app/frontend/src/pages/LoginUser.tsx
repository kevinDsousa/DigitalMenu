import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin'

export const LoginUser: React.FC = () => {

  const { handleLogin } = useLogin();
  return (
    <section className='flex flex-col items-center justify-center m-auto'>
      <h2 className='font-mono text-center text-4xl font-bold text-white mb-5'>Seja bem vindo</h2>
      <Form
        name="normal_login"
        className="login-form w-full"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Insira seu usuário!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuário" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Insira sua senha!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
          />
        </Form.Item>
        <Form.Item>
          <div className='flex flex-col gap-3'>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox><span className='text-white'>Tenho alzheimer</span></Checkbox>
            </Form.Item>
            <Link className="login-form-forgot text-white" to="/recover-password">
              Joguei a senha no mato
            </Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button w-full bg-green-500">
            Logar
          </Button>
        </Form.Item>
      </Form>
    </section>
  )
};