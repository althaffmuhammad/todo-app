import mongoose from 'mongoose';

const crudScema = new mongoose.Schema ({
  name: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model ('CRUD', crudScema);
