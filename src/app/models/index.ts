import Product from './Product';
import Cart from './Cart';
import CartItem from './CartItem';

const register = (models) => () => {
  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
};

const registerModels = register({ Product, Cart, CartItem });

export { registerModels, Product, Cart, CartItem };