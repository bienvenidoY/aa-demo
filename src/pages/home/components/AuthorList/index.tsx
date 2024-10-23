import React from 'react'
import {Avatar, Menu, Space} from "@arco-design/web-react";
const MenuItem = Menu.Item;

interface Props {
  change: (item: any) => void;
}

const AuthorList: React.FC = (props: Props) => {
  const list = [
    {avatar: '', desc: 'hahahha'},
    {avatar: '', desc: 'hahahha'},
  ]
  const change = (item) => {
    props.change(item)
  }

  return (
    <div>
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

    </div>
  )
}
export default AuthorList;
