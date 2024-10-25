import React, {useState, useRef, useEffect} from 'react'
import {AutoComplete, Button, Form, Input, Space, Checkbox, Link} from "@arco-design/web-react";
import { IconLock, IconEmail} from '@arco-design/web-react/icon';
import { useLocalStorageState } from 'ahooks';

import { FormInstance } from '@arco-design/web-react/es/Form';

const FormItem = Form.Item;

interface Props {
  changeTab: (number: number) => void
  login: (form: any) => void
}

const Login: React.FC = (props: Props) => {
  const [form] = Form.useForm();

  const [data, setData] = useState([]);
  const formRef = useRef<FormInstance>();

  function onSubmitClick() {
    formRef.current.validate().then((values) => {
      props.login(values)
    });
  }

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

  const [loginParams,] = useLocalStorageState('loginParams', { defaultValue: {},});
  const [rememberPassword, setRememberPassword] = useState(!!loginParams.password);

  // 读取 localStorage，设置初始值
  useEffect(() => {
    const rememberPassword = !!loginParams.password;
    setRememberPassword(rememberPassword);
    if (formRef.current && rememberPassword) {
      formRef.current.setFieldsValue(loginParams);
    }
  }, [loginParams]);

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
      <FormItem  field='password' rules={[{ required: true }]}>
        <Input.Password prefix={<IconLock />} placeholder='请输入 密码'
               onPressEnter={onSubmitClick}
        />
      </FormItem>

      <Space size={16} direction="vertical">
        <div className={'flex justify-between'}>
          <Checkbox checked={rememberPassword} onChange={setRememberPassword}>
            记住密码
          </Checkbox>
          <Link>忘记密码</Link>
        </div>
        <Button long type={"primary"} onClick={onSubmitClick}>登录</Button>
        <Button long type={"secondary"} onClick={() => {
          props.changeTab(1)
        }}>注册账号</Button>
      </Space>
    </Form>
  )
}

export default Login
