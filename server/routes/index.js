const express = require('express');
const sectionController = require('../controllers/sectionController');
const branchController = require('../controllers/branchController');
const subBranchController = require('../controllers/subBranchController');
const stackController = require('../controllers/stackController');
const technologyController = require('../controllers/technologyController');

const router = express.Router();

// Sections
router.route('/sections').get(sectionController.getAllSections);
// Add other CRUD routes for sections if needed...

// Branches
router.route('/branches').get(branchController.getAllBranches);
router.route('/branches/:sectionId').get(branchController.getBranchesBySectionId);
// Add other CRUD routes for branches if needed...

// Sub-Branches
router.route('/sub-branches').get(subBranchController.getAllSubBranches);
router.route('/sub-branches/:branchId').get(subBranchController.getSubBranchesByBranchId);
// Add other CRUD routes for sub-branches if needed...

// Stacks
router.route('/stacks').get(stackController.getAllStacks);
router.route('/stacks/:subBranchId').get(stackController.getStacksBySubBranchId);
// Add other CRUD routes for stacks if needed...

// Technologies
router.route('/technologies').get(technologyController.getAllTechnologies);
router.route('/technologies/:stackId').get(technologyController.getTechnologiesByStackId);
// Add other CRUD routes for technologies if needed...

module.exports = router;
