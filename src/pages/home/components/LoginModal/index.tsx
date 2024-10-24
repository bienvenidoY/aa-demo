import React, {useState, useImperativeHandle, forwardRef} from 'react'
import { Form,  Message, Modal,} from "@arco-design/web-react";
import Login from './components/Login'
import Register from './components/Register'

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

  return (
    <Modal
      title={current === 0 ? '登录' : '注册'}
      visible={visible}
      footer={null}
      confirmLoading={confirmLoading}
      onCancel={() => setVisible(false)}
    >
      <div>
        <Login change />
        <Register />
      </div>
    </Modal>
  )
})
export default LoginModal;
