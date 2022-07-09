import { DataTypes, Model, Optional, ForeignKey } from 'sequelize';
import sequelize from 'database/config';
import { Cart, Product } from 'app/models';

export type CartItemAttributes = {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  price: number;
  total: number;
}

type CartItemCreationAttributes = Optional<CartItemAttributes, 'id'>;

class CartItem extends Model<CartItemAttributes, CartItemCreationAttributes> implements CartItemAttributes {
  declare id: string;
  declare cartId: ForeignKey<Cart['id']>;
  declare productId: ForeignKey<Product['id']>;
  declare quantity: number;
  declare price: number;
  declare total: number;

  static associate({ Product }) {
    CartItem.hasOne(Product, {
      sourceKey: 'id',
      foreignKey: 'productId',
      as: 'product'
    });
  }
} 

CartItem.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  cartId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, 
{ 
  sequelize,
  tableName: 'cart_items',
  underscored: true,
  timestamps: true,
});

export default CartItem;
