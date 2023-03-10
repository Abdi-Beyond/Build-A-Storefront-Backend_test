import express, { Request, Response } from 'express';
import { Dashboard } from '../services/dashboard';


const dashboard = new Dashboard();

const productinorder = async (_req: Request, res: Response) => {
    try {
        const products = await dashboard.productsinorder();
        res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
}
const addproducttoorder = async (req: Request, res: Response) => {
    try {
        const pro = {
            quantity: req.body.quantity,
            order_id: req.body.order_id,
            product_id: req.body.product_id

        }
    const products = await dashboard.addproducttoorder(pro);
    res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
}

const updateproductquantity = async (req: Request, res: Response) => {
    try {
        const pro = {
            quantity: req.body.quantity,
            order_id: req.body.order_id,
            product_id: req.body.product_id

        }
    const products = await dashboard.updateproductquantity(pro);
    res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
}
const deleteproductfromorder = async (req: Request, res: Response) => {
    try {
    const products = await dashboard.deleteproductfromorder(req.body.order_id, req.body.product_id);
    res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
}

const productinorderRouter = (app: express.Application) => {
    app.get('/productinorder', productinorder),
    app.patch('/updateproductquantity', updateproductquantity),
    app.delete('/deleteproductfromorder', deleteproductfromorder),
    app.post('/addproducttoorder', addproducttoorder)
};
export default productinorderRouter;