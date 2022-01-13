import express from 'express';

import { getBikes, createBike, updateBikeStatus, deleteBike } from './../controllers/bikes.js'

const router = express.Router();

router.get('/', getBikes);
router.post('/', createBike);
router.patch('/:id', updateBikeStatus);
router.delete('/:id', deleteBike);

export default router;