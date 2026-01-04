import Cart from "../../models/Cart.model.js"


export const AddToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { items } = req.body;

        if (!items || !items.productId) {
            return res.status(400).json({
                message: "Item is invalid",
                status: false
            });
        }

        const quantity = items.quantity && items.quantity > 0
            ? items.quantity
            : 1;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = await Cart.create({
                userId,
                items: [{
                    productId: items.productId,
                    quantity
                }]
            });

            return res.status(201).json({
                message: "Create cart & add item success",
                status: true,
                data: cart
            });
        }

        const itemIndex = cart.items.findIndex(
            i => i.productId.toString() === items.productId
        );

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({
                productId: items.productId,
                quantity
            });
        }

        await cart.save();

        res.status(200).json({
            message: "Add cart success",
            status: true,
            data: cart
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error [AddToCart]",
            status: false
        });
    }
};