import React, {useState} from 'react'; // 引入 React
import { css } from '/styled-system/css';
import { flex } from "/styled-system/patterns";
import { PageHeader, Button, Grid, Card,
  Link, Avatar, Space, Menu, Modal,
  Form, Input, Select, Message, Drawer , Typography} from '@arco-design/web-react';
import { Table } from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;


const List: React.FC = () => {
  const list = [
    {avatar: '', desc: 'hahahha'},
    {avatar: '', desc: 'hahahha'},
  ]
  const [currentData, setCurrentData] = useState('')

  return (
   <div>
     <Menu mode='vertical' onClickMenuItem={(key) => setCurrentData(key)}>
       {currentData}
       {
         list.map((v, i) => {
           return <MenuItem key={i}>
             <Space>
               <Avatar size={32}>A</Avatar>
               <div>{v.desc}</div>
             </Space>
           </MenuItem>
         })
       }
     </Menu>

   </div>
  )
}

const TableList: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  const data = [
    {
      id: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      id: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      id: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      id: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      id: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState(['4']);
  return (
    <div>
      <Table
        rowKey='id'
        columns={columns}
        data={data}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys,
          onChange: (selectedRowKeys, selectedRows) => {
            console.log('onChange:', selectedRowKeys, selectedRows);
            setSelectedRowKeys(selectedRowKeys);
          },
          onSelect: (selected, record, selectedRows) => {
            console.log('onSelect:', selected, record, selectedRows);
          },
          checkboxProps: (record) => {
            return {
              disabled: record.id === '4',
            };
          },
        }}
      />
    </div>
  )
}

const HomePage: React.FC = () => {
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

  const [visible1, setVisible1] = useState(false);

  return (
    <>
      <Modal
        title='添加文章链接'
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

      <Drawer
        width={550}
        title={<span>洗稿历史</span>}
        visible={visible1}
        footer={null}
        onCancel={() => {
          setVisible1(false);
        }}
      >
        <TableList />
      </Drawer>

      <div className={css({
        paddingBottom: '12px'
      })}>
        <PageHeader
          style={{ background: 'var(--color-bg-2)' }}
          title='猕猴桃助手'
          extra={
            <div>
              <Button type='text' onClick={() => {
                setVisible1(true);
              }}>
                洗稿历史
              </Button>
            </div>
          }
        />
      </div>
      <Row gutter={24}>
        <Col span={8} >
          <Card
            title='公众号'
            extra={<Link onClick={() => setVisible(true)}>添加</Link>}
          >
            <div>
              <List />
            </div>
          </Card>
        </Col>
        <Col span={16} >
          <Card
          title={
            <Space>
              <Button size={'small'} type={'primary'} onClick={() => {
                setVisible1(true);
              }}>
                一键洗稿
              </Button>
              <Typography.Text
                type='secondary'
                className={css({ fontSize: '12px', fontWeight: 400})}>已经选择0篇</Typography.Text>
            </Space>
          }
          >
            <div>
              <TableList />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
