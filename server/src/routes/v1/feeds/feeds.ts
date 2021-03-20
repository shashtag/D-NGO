import express, {Request, Response} from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import { BadRequestError } from '../../../core/ApiError';
import { Types } from 'mongoose';
import validator, { ValidationSource } from '../../../helpers/validator';
import asyncHandler from '../../../helpers/asyncHandler';
import Feeds,{FeedsModel} from '../../../database/model/Feeds'

const router = express.Router();

router.post('/addfeeds', async (req: Request, res: Response) => {
    const { name, message } = req.body ;
    const feeds : Feeds = new FeedsModel ({name, message})
    const newFeeds = await feeds.save();
    res.json(newFeeds);
})

router.get('/getfeeds', async (req: Request, res: Response) => {
    const allFeeds = await FeedsModel.find({});
    res.json(allFeeds);
})

export default router