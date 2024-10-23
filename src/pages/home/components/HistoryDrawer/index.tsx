import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {Drawer, Table} from "@arco-design/web-react";

interface Props {
  change: (item: any) => void;
}

const HistoryList: React.FC = (props: Props) => {
  const columns = [
    {
      title: 'Name111',
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

  return (
    <div>
      <Table
        rowKey='id'
        columns={columns}
        data={data}
      />
    </div>
  )
}

const HistoryDrawer: React.FC = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true)
  }
  useImperativeHandle(ref, () => ({
    show,
  }))
  return (
    <Drawer
      width={550}
      title={<span>洗稿历史</span>}
      visible={visible}
      footer={null}
      onCancel={() => {
        setVisible(false);
      }}
    >
      <HistoryList />
    </Drawer>
  )
})

export default HistoryDrawer;
