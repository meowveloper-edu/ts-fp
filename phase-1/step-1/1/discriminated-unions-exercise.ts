interface Product_Add_To_Cart_Action_Interface {
    type : 'ADD_TO_CART';
    product_id : string;
    quantity : number;
}

interface Product_Remove_From_Cart_Action_Interface {
    type : 'REMOVE_FROM_CART';
    product_id : string;
}

interface Checkout_Action_Interface {
    type : 'CHECK_OUT';
    total_amount : number;
    currency : 'USD' | 'MMK' | 'Bhat'
}

type User_Actions_Type = Product_Add_To_Cart_Action_Interface | Product_Remove_From_Cart_Action_Interface | Checkout_Action_Interface;

function process_action (action : User_Actions_Type) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(`Product "${action.product_id}" added to cart with quantity ${action.quantity}.`);
            break;

        case 'REMOVE_FROM_CART':
            console.log(`Product "${action.product_id}" removed from cart.`);
            break;

        case 'CHECK_OUT':
            console.log(`Checkout initiated for total amount ${action.total_amount} ${action.currency}.`);
            break;

        default:
            throw new Error(`un-handled action type ${action as never}`);
    }
}

const add_to_cart_action : User_Actions_Type = { type : 'ADD_TO_CART', product_id : 'UI UI UI', quantity : 2 };
const remove_from_cart_action : User_Actions_Type = { type : 'REMOVE_FROM_CART', product_id : 'UI UI UI' };
const checkout_action : User_Actions_Type = { type : 'CHECK_OUT', total_amount : 56, currency : 'USD' };

process_action(add_to_cart_action);
process_action(remove_from_cart_action);
process_action(checkout_action);