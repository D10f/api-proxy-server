import { Router } from 'express';
import * as APIController from '../controllers/api';
import utils from '../../utils';
import validateParams from '../middleware/validateParams';

const router = Router();

router.get('/', validateParams, utils.asyncHandler(APIController.getApiKey));

export default router;
