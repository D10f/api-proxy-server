import { Router } from 'express';
import * as APIController from '../controllers/api';
import asyncRequestHandler from '../../helpers/asyncRouteHandler';

const router = Router();

router.get('/', asyncRequestHandler(APIController.getApiKey));

export default router;
