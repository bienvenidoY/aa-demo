import React, {useState, useRef} from 'react'; // 引入 React
import {Grid, Card, Link,} from '@arco-design/web-react';

import Header from './components/Header'
import AuthorList from "@/pages/home/components/AuthorList";
import AuthorAddModal from "@/pages/home/components/AuthorAddModal";
import ArticleModule from "@/pages/home/components/ArticleModule";
import HistoryDrawer from "@/pages/home/components/HistoryDrawer";
import LoginModal from "@/pages/home/components/LoginModal";

const Row = Grid.Row;
const Col = Grid.Col;

const HomePage: React.FC = () => {
  const HistoryDrawerRef = useRef(null)
  const AuthorAddModalRef = useRef(null)
  return (
    <>
      <LoginModal />
      <AuthorAddModal ref={AuthorAddModalRef}/>
      <HistoryDrawer ref={HistoryDrawerRef}/>

      <div className={'pb-3'}>
        <Header showHistoryModal={
          () => {
            HistoryDrawerRef.current.show()
          }
        }/>
      </div>
      <Row gutter={24}>
        <Col span={8} >
          <Card
            title='公众号'
            extra={<Link onClick={() => AuthorAddModalRef.current.show()}>添加</Link>}
          >
            <div>
              <AuthorList />
            </div>
          </Card>
        </Col>
        <Col span={16} >
          <ArticleModule />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
