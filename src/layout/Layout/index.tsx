import React from 'react'; // 引入 React

interface Props {
  currentPath: string;
  setCurrentPath: (path: string) => void;
}

const Layout: React.FC<Props> = (props) => {

  // 导航到不同页面
  function navigateTo(path) {
    window.history.pushState({}, '', path);
    props.setCurrentPath(path);
  }
  return (
    <>
      <div>
        <div>
          <button onClick={() => navigateTo('/')}>Home</button>
          <button onClick={() => navigateTo('/history')}>history</button>
        </div>
        <main>
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Layout;