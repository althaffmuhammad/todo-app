import express from 'express';
import {
  addController,
  getController,
  getSingleController,
  removeController,
  updateController,
} from '../controllers/crudController.js';

const router = express.Router ();

// add
router.post ('/add', addController);

// get
router.get ('/get', getController);

// get
router.get ('/single/:slug', getSingleController);

// remove
router.delete ('/remove/:id', removeController);

// update
router.put ('/update/:id', updateController);

export default router;
