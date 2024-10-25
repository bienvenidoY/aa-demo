import React from 'react'
import {Avatar, Menu, Space, Skeleton, Button} from "@arco-design/web-react";
import {useLocalStorageState} from "ahooks";
const MenuItem = Menu.Item;


interface LoginMaskProps {
  showLoginModal: () => void;
}

const LoginMask: React.FC = (props: LoginMaskProps) => {
  const skeletonList = 5
  return (
    <div className='relative'>
      <div className="mx-auto absolute w-full h-full bg-[#fdf6f6] opacity-65">
      </div>
      <div className={'absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>
        <Button type={'primary'} onClick={() => props.showLoginModal()}>
          即刻体验
        </Button>
      </div>
      {
        Array.from({length: skeletonList}, (v, index) => index).map(index => {
          return (
            <Skeleton
              className={'mb-4'}
              key={index} // 为每个Skeleton组件添加一个唯一的key属性
              text={{width: ['30%', '70%'], rows: 2}}
              image={{shape: 'circle', size: 'small'}}
            />
          );
        })
      }
    </div>
  )
}

interface Props {
  change: (item: any) => void;
  showLoginModal: () => void;
}

const AuthorList: React.FC = (props: Props) => {
  const list = [
    {avatar: '', desc: 'hahahha'},
    {avatar: '', desc: 'hahahha'},
  ]
  const change = (item) => {
    props.change(item)
  }
  const [userInfo] = useLocalStorageState('user-info',{
    defaultValue: {},
  })

  return (
    <div>
      {
        userInfo.id ?
          <Menu mode='vertical' onClickMenuItem={change}>
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
          : <LoginMask showLoginModal={() => props.showLoginModal()}/>
      }
    </div>
  )
}
export default AuthorList;
