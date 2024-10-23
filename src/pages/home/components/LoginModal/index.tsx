import React, {useState} from 'react'
import { Form, Input, Message, Modal} from "@arco-design/web-react";
const FormItem = Form.Item;

interface Props {
  showHistoryModal: () => void;
}

const LoginModal: React.FC = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  function onOk() {
    form.validate().then((res) => {
      setConfirmLoading(true);
      setTimeout(() => {
        Message.success('Success !');
        setVisible(false);
        setConfirmLoading(false);
      }, 1500);
    });
  }
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  return (
    <Modal
      title='登录'
      visible={visible}
      onOk={onOk}
      confirmLoading={confirmLoading}
      onCancel={() => setVisible(false)}
    >
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
        <FormItem label='文章链接' field='url' rules={[{ required: true }]}>
          <Input placeholder='' />
        </FormItem>
      </Form>
    </Modal>
  )
}
export default LoginModal;
