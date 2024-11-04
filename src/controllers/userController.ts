import { Request, Response, RequestHandler } from 'express';
import * as userService from '../services/userService';
import { logger } from '../utils/logger';

export const createUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    logger.error('Error creating user:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getUserById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    logger.error('Error getting user:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const updateUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(updatedUser); 
  } catch (error) {
    logger.error('Error updating user:', error);
    res.status(500).json({ error: 'Server Error' }); 
  }
};

export const deleteUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    logger.error('Error deleting user:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};


export const buyProduct: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  const productId = req.body.productId;
  const quantity = req.body.quantity;
  try {
    const result = await userService.purchaseProduct(userId, productId, quantity);
    res.status(200).json(result);
  } catch (error) {
    logger.error('Error purchasing product:', error);
    if (error instanceof Error && error.message === 'User or product not found') {
      res.status(404).json({ error: error.message });
      return;
    }
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getUserPurchases: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  try {
    const purchases = await userService.getUserPurchases(userId);
    res.status(200).json(purchases);
  } catch (error) {
    logger.error('Error retrieving user purchases:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};