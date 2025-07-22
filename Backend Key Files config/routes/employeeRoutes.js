const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleCheck');

router.get('/', authenticateToken, authorizeRoles(1,2), employeeController.getAllEmployees);
router.get('/:id', authenticateToken, authorizeRoles(1,2), employeeController.getEmployeeById);
router.post('/', authenticateToken, authorizeRoles(1), employeeController.createEmployee);
router.put('/:id', authenticateToken, authorizeRoles(1), employeeController.updateEmployee);
router.delete('/:id', authenticateToken, authorizeRoles(1), employeeController.deleteEmployee);

module.exports = router;
