import React, {useRef, useState} from 'react'
import { useCountDown } from 'ahooks';


import {AutoComplete, Form, Input, Button, Space} from "@arco-design/web-react";
import {IconEmail, IconLock, IconRobot} from "@arco-design/web-react/icon";
import {FormInstance} from "@arco-design/web-react/es/Form";
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
      <Input placeholder='请输入 验证码' prefix={<IconRobot />}  style={{ width: '65%' }} />
      <Button
        disabled={countdown !== 0}
        style={{ width: '35%' }}
        type={'primary'}
        onClick={() => {
          setTargetDate(Date.now() + 60000);
        }}
      >{countdown === 0 ? '发送验证码' : `${seconds}s`}</Button>
    </Input.Group>
  )
}


interface Props {
  changeTab: (number: number) => void
}
const Register: React.FC = (props: Props) => {
  const [form] = Form.useForm();
  const formRef = useRef<FormInstance>();
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

  function onSubmitClick() {
    formRef.current.validate().then((values) => {
      console.log(values);
    });
  }

  const [ isSend, SetSend ] = useState()
  return (
    <Form
      ref={formRef}
      wrapperCol={{ span: 24, offset: 0 }}
      form={form}
    >
      <FormItem field='email' rules={[{ required: true }]}>
        <AutoComplete
          placeholder='请输入 邮箱地址'
          onSearch={handleSearch}
          data={data}
          inputProps={{
            prefix: <IconEmail />,
          }}
        />
      </FormItem>
      <FormItem field='password1' rules={[{ required: true }]}>
        <InputCode />
      </FormItem>
      <FormItem field='password' rules={[{ required: true }]}>
        <Input.Password prefix={<IconLock />} placeholder='请输入 密码'
               onPressEnter={onSubmitClick}
        />
      </FormItem>
      <Space size={16} direction="vertical">
        <Button long type={"primary"}>注册账号</Button>
        <Button long type={"text"} onClick={() => props.changeTab(0)}>返回登录</Button>
      </Space>
    </Form>
  )
}

export default Register
