import { Router } from 'express';
import { createMenu, getAllMenus } from '../controllers/menuController';


const router = Router();

router.post('/menus', createMenu);
router.get('/menus', getAllMenus);

export default router;
