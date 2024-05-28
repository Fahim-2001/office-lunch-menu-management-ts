import { Router } from 'express';
import { createChoice, getAllChoices } from '../controllers/choiceController';


const router = Router();

router.get('/', getAllChoices);
router.post('/', createChoice);

export default router;
