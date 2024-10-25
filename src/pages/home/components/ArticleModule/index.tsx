import React, {useEffect, useState} from 'react'
import {Button, Card, Space, Table, Typography} from "@arco-design/web-react";
import {useLocalStorageState} from "ahooks";

interface Props {
  change: (item: any) => void;
}

const ArticleList: React.FC = (props: Props) => {
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

  const [userInfo, setUserInfo] = useLocalStorageState('user-info',{
    defaultValue: {},
  })

  useEffect(() => {

  }, [userInfo])

  return (
    <div>
      <Table
        rowKey='id'
        columns={columns}
        data={data}
        rowSelection={userInfo.id && {
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


const ArticleModule: React.FC = () => {
  const [userInfo, setUserInfo] = useLocalStorageState('user-info',{
    defaultValue: {},
  })
  return (
    <Card
      title={
        userInfo.id ?
        <Space>
          <Button size={'small'} type={'primary'} >
            一键洗稿
          </Button>
          <Typography.Text
            type='secondary'
            className={'text-[14px] font-[400]'}>已经选择0篇</Typography.Text>
        </Space>
          : '推荐文章'
      }
    >
      <div>
        <ArticleList />
      </div>
    </Card>
  )
}
export default ArticleModule;
