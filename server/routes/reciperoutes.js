const express = require('express');
const router = express.Router();
const recipecontroller=require('../controllers/recipecontroller');

router.get('/',recipecontroller.homepage);
router.get('/categories' ,recipecontroller.explorecategories)
router.get('/recipe/:id',recipecontroller.explorerecipe)
router.get('/categories/:id',recipecontroller.exploreCategoriesById);
router.post('/search',recipecontroller.searchrecipe);
router.get('/explore-latest',recipecontroller.explorelatest);

router.get('/explore-random',recipecontroller.exploreRandom);
router.get('/submit-recipe',recipecontroller.submitrecipe);
router.post('/submit-recipe', recipecontroller.submitRecipeOnPost);
module.exports =router;