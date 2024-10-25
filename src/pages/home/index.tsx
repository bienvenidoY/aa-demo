import React, {useState, useRef, useEffect} from 'react'; // 引入 React
import { useLocalStorageState } from 'ahooks';

import {Grid, Card, Link,} from '@arco-design/web-react';

import Header from './components/Header'
import AuthorList from "@/pages/home/components/AuthorList";
import AuthorAddModal from "@/pages/home/components/AuthorAddModal";
import ArticleModule from "@/pages/home/components/ArticleModule";
import HistoryDrawer from "@/pages/home/components/HistoryDrawer";
import LoginModal from "@/pages/home/components/LoginModal";

const Row = Grid.Row;
const Col = Grid.Col;

const getLocal = () => {
  localStorage.getItem('userInfo')
}

const HomePage: React.FC = () => {
  const HistoryDrawerRef = useRef(null)
  const AuthorAddModalRef = useRef(null)
  const LoginModalRef = useRef(null)
  const [userInfo, setUserInfo] = useLocalStorageState('user-info',{
    defaultValue: {},
  })

  return (
    <>
      <LoginModal ref={LoginModalRef}/>
      <AuthorAddModal ref={AuthorAddModalRef}/>
      <HistoryDrawer ref={HistoryDrawerRef}/>

      <div className={'pb-3'}>
        <Header
          showHistoryModal={
          () => {
            HistoryDrawerRef.current.show()
          }
        }
        />
      </div>
      <Row gutter={24}>
        <Col span={8} >
          <Card
            title='公众号'
            extra={
              userInfo.id &&
              <Link onClick={() => AuthorAddModalRef.current.show()}>添加</Link>
            }
          >
            <div>
              <AuthorList
                showLoginModal={() =>  LoginModalRef.current.show()}
                change={(key) => {
                console.log(key)
              }} />
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
