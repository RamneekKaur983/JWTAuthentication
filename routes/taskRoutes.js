const { Router } = require('express');
const taskController = require('../controllers/taskController');


const router = Router();

router.post('/addTask',taskController.add_task );
router.post('/deleteTask', taskController.delete_task);
router.post('/updateTask/:id', taskController.update_task);
router.post('/clear' , taskController.clear)


module.exports = router;