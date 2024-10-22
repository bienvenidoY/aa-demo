import React from 'react'; // 引入 React
import { PageHeader, Button } from '@arco-design/web-react';
import { Grid } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <PageHeader
          style={{ background: 'var(--color-bg-2)' }}
          title='猕猴桃助手'
          extra={
            <div>
              <Button type='text'>
                洗稿历史
              </Button>
            </div>
          }
        />
      </div>

      <Row gutter={24}>
        <Col span={8} >
          <div>z左面顶部</div>
          <div>z左面列表</div>
        </Col>
        <Col span={16} >
          <div> 一键洗稿按钮</div>
          <div>右面列表</div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
