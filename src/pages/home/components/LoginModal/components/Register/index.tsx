import React, {useState} from 'react'
import { useCountDown } from 'ahooks';


import {AutoComplete, Form, Input, Button} from "@arco-design/web-react";
const FormItem = Form.Item;


const InputCode: React.FC = () => {
  const [targetDate, setTargetDate] = useState<number>();
  const [countdown, formattedRes] = useCountDown({
    targetDate,
    onEnd: () => {
      console.log('End of the time');
    },
  });
  const {seconds } = formattedRes;

  return (
    <Input.Group compact>
      <Input placeholder='请输入 验证码' style={{ width: '75%' }} />
      <Button
        disabled={countdown !== 0}
        style={{ width: '25%' }}
        type={'primary'}
        onClick={() => {
          setTargetDate(Date.now() + 60000);
        }}
      >{countdown === 0 ? '发送验证码' : `${seconds}s`}</Button>
    </Input.Group>
  )
}

const Register: React.FC = () => {
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

  const [ isSend, SetSend ] = useState()
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
      <FormItem label='验证码' field='password1' rules={[{ required: true }]}>
        <InputCode />
      </FormItem>
      <FormItem label='密码' field='password' rules={[{ required: true }]}>
        <Input.Password placeholder='请输入 密码'  />
      </FormItem>
      <Button long type={"primary"}>注册账号</Button>
    </Form>
  )
}

export default Register
