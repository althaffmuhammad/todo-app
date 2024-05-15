import crudModel from '../models/crudModel.js';
import slugify from 'slugify';

// add-controllere
export const addController = async (req, res) => {
  try {
    const {name} = req.body;
    if (!name) {
      return res.status (401).send ({
        message: 'Name is required',
      });
    }
    const list = await new crudModel ({
      name,
      slug: slugify (name),
    }).save ();
    res.status (201).send ({
      success: true,
      message: 'new list create ',
      list,
    });
  } catch (error) {
    console.log (error);
    res.status (500).send ({
      success: false,
      error,
      message: 'Error in list',
    });
  }
};

// get-controllere
export const getController = async (req, res) => {
  try {
    const list = await crudModel.find ({});

    res.status (200).send ({
      success: true,
      message: 'All category List',
      list,
    });
  } catch (error) {
    console.log (error);
    res.status (500).send ({
      success: false,
      error,
      message: 'Error in get list',
    });
  }
};

//single list
export const getSingleController = async (req, res) => {
  try {
    const list = await crudModel.findOne ({slug: req.params.slug});

    res.status (200).send ({
      success: true,
      message: 'single List',
      list,
    });
  } catch (error) {
    console.log (error);
    res.status (500).send ({
      success: false,
      error,
      message: 'Error in single list',
    });
  }
};

// remove-controllere
export const removeController = async (req, res) => {
  try {
    const {id} = req.params;
    await crudModel.findByIdAndDelete (id);
    res.status (200).send ({
      success: true,
      message: 'list Delete Successfuly',
    });
  } catch (error) {
    console.log (error);
    res.status (500).send ({
      success: false,
      error,
      message: 'Error in delete list',
    });
  }
};

// update-controllere
export const updateController = async (req, res) => {
  try {
    const {name} = req.body;
    const {id} = req.params;
    const list = await crudModel.findByIdAndUpdate (
      id,
      {name, slug: slugify (name)},
      {new: true}
    );

    res.status (201).send ({
      success: true,
      message: 'list Upadate Successfuly',
      list,
    });
  } catch (error) {
    console.log (error);
    res.status (500).send ({
      success: false,
      error,
      message: 'Error in update list',
    });
  }
};
