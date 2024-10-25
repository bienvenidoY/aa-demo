import React, {useState, useImperativeHandle, forwardRef} from 'react'
import { Modal, Message} from "@arco-design/web-react";
import Login from './components/Login'
import Register from './components/Register'
import {useLocalStorageState} from "ahooks";

interface Props {
  showHistoryModal: () => void;
}

const LoginModal: React.FC = forwardRef((props: Props, ref) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true)
  }));
  const [current, setCurrent] = useState(0)
  const [userInfo, setUserInfo] = useLocalStorageState('user-info',{
    defaultValue: {},
  })

  const login =(form) => {
    console.log(111, form)
    Message.success('登录成功')
    setUserInfo({
      id: 1,
      userName: 'fe-test',
    })
    setVisible(false)
  }

  const register = (form) => {
    console.log(222, form)
    Message.success('注册成功')
    setCurrent(0)
  }

  return (
    <Modal
      title={current === 0 ? '登录' : '注册'}
      visible={visible}
      style={{
        width: '350px'
      }}
      footer={null}
      confirmLoading={confirmLoading}
      onCancel={() => setVisible(false)}
    >
      <div>
        {
          current === 0 ? <Login
              login={login}
              changeTab={(key) => setCurrent(key)} />
            :<Register
              register={register}
              changeTab={(key) => setCurrent(key)}/>
        }
      </div>
    </Modal>
  )
})
export default LoginModal;
