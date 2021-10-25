import { Router } from 'express';
import * as APIController from '../controllers/api';
import asyncRequestHandler from '../../helpers/asyncRouteHandler';
import validateParams from '../middleware/validateParams';

const router = Router();

router.get('/', validateParams, asyncRequestHandler(APIController.getApiKey));

export default router;
