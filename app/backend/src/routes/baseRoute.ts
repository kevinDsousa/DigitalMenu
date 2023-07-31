import * as express from 'express'
import { baseController } from '../controllers/baseController';

export const baseRoutes = express.Router();

baseRoutes.get('/olt', baseController.buscar)
