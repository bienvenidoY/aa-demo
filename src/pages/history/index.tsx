import React from 'react'; // 引入 React
import {useState} from 'react';
import {Drawer, Button} from '@arco-design/web-react';

const HistoryList: React.FC = () => {
  return (
    <div>洗稿列表</div>
  )
}

const HistoryPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        width={400}
        title={<span>Basic Information </span>}
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <HistoryList/>
      </Drawer>
    </>
  );
};

export default HistoryPage;
