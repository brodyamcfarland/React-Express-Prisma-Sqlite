const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

//=======================POSTS==========================//
//GET ALL POSTS
router.get('/posts', async (req, res, next) => {
  try {
    const getAllPosts = await prisma.post.findMany({
      include: { author: true }
    });
    res.json(getAllPosts);
  } catch (error) {
    next(error);
  }
});
//GET POST BY ID
router.get('/posts/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const getPostById = await prisma.post.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    res.json(getPostById);
  } catch (error) {
    next(error);
  }
});
//CREATE A POST
router.post('/posts', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
//DELETE A POST BY ID
router.delete('/posts/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletePostById = await prisma.post.delete({
      where: {
        id: parseInt(id)
      }
    });
    res.json(deletePostById);
  } catch (error) {
    next(error);
  }
});
//UPDATE A POST BY ID
router.patch('/posts/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//============================USERS========================//
//CREATE A USER
router.post('/user', async (req, res, next) => {
  try {
    const createUser = await prisma.user.create({
      data: req.body
    });
    res.json(createUser);
  } catch (error) {
    next(error);
  }
});
//DELETE A USER BY ID
router.delete('/user/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
//UPDATE A USER BY ID
router.patch('/user/:id', async (req, res, next) => {
  res.patch({ message: 'Ok api is working 🚀' });
});
// //GET ALL USERS
// router.get('/user', async (req, res, next) => {
//   res.send({ message: 'Ok api is working 🚀' });
// });
// //GET USER BY ID
// router.get('/user/:id', async (req, res, next) => {
//   res.send({ message: 'Ok api is working 🚀' });
// });


//==========================PROFILE========================//
//UPDATE PROFILE BY ID
router.patch('/profile/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});


module.exports = router;
