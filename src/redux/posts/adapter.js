import { createEntityAdapter } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (post) => post.id,
});

export default adapter;
