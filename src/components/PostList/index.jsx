import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post';
import Posts from '../../redux/posts';
import './index.scss';
import usePagination from '../../hooks/usePagination';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(Posts.selectors.postsSelectors.selectAll);
  const meta = useSelector(Posts.selectors.getMeta);

  const { renderPagination, page } = usePagination({ meta });
  useEffect(() => {
    dispatch(Posts.thunks.fetchAll({ page }));
  }, [page]);
  return (
    <div className='post-list-container'>
      <Row>
        {posts.map((post) => (
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
      {renderPagination()}
    </div>
  );
};

export default PostList;
