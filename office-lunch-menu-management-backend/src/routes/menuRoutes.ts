import { Router } from 'express';
import { createMenu, getAllMenus } from '../controllers/menuController';


const router = Router();

router.post('/', createMenu);
router.get('/', getAllMenus);

export default router;
