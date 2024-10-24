import React, {useState} from 'react'
import {AutoComplete, Button, Form, Input, Space} from "@arco-design/web-react";
const FormItem = Form.Item;

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  const [data, setData] = useState([]);

  const handleSearch = (inputValue) => {
    const mailList = ['gmail', 'qq.com', '163.com']
    let res = []
    if(!inputValue || inputValue.includes('@')) {
      res = []
    }else {
      res = mailList.map(domain => `${inputValue}@${domain}`)
    }
    setData(res);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      labelCol={{
        style: { flexBasis: 90 },
      }}
      wrapperCol={{
        style: { flexBasis: 'calc(100% - 90px)' },
      }}
    >
      <FormItem label='邮箱' field='email' rules={[{ required: true }]}>
        <AutoComplete
          placeholder='请输入 邮箱地址'
          onSearch={handleSearch}
          data={data}
        />
      </FormItem>
      <FormItem label='密码' field='password' rules={[{ required: true }]}>
        <Input placeholder='请输入 密码' />
      </FormItem>
      <Space>
        <Button type={"primary"}>登录</Button>
        <Button type={"outline"}>注册账号</Button>
      </Space>
    </Form>
  )
}

export default Login
