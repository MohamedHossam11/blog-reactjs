import { createEntityAdapter } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (user) => user.id,
});

export default adapter;
