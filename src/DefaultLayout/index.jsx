import { Layout } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import useLoadable from '../hooks/useLoadable';
import './index.scss';
import Loadable from '../components/Loadable';

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const { isLoading } = useLoadable();

  return (
    <Layout>
      <Loadable spinning={isLoading}>
        <Header />
        <Layout.Content>
          <TransitionGroup>
            <CSSTransition key={location} timeout={1000} classNames='fade'>
              <div className='page'>{children}</div>
            </CSSTransition>
          </TransitionGroup>
        </Layout.Content>
      </Loadable>
    </Layout>
  );
};

export default DefaultLayout;
