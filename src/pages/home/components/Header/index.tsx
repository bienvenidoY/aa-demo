import React from 'react'
import {Button, PageHeader} from "@arco-design/web-react";
import {useLocalStorageState} from "ahooks";

interface Props {
  showHistoryModal: () => void;
}

const Header: React.FC = (props: Props) => {
  const [userInfo] = useLocalStorageState('user-info',{
    defaultValue: {},
  })
  return <PageHeader
    style={{ background: 'var(--color-bg-2)' }}
    title='猕猴桃助手'
    extra={
      userInfo.id && <div>
        <Button type='text' onClick={() => {
          props.showHistoryModal();
        }}>
          洗稿历史
        </Button>
      </div>
    }
  />
}
export default Header;
