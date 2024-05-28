import { Router } from 'express';
import { createChoice, getAllChoices } from '../controllers/choiceController';


const router = Router();

router.get('/choices', getAllChoices);
router.post('/choices', createChoice);

export default router;
