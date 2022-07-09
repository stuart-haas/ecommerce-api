import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'database/config';

export type CartAttributes = {
  id: string;
  customerId: string;
  subtotal: number;
  total: number;
}

type CartCreationAttributes = Optional<CartAttributes, 'id'>;

class Cart extends Model<CartAttributes, CartCreationAttributes> implements CartAttributes {
  declare id: string;
  declare customerId: string;
  declare subtotal: number;
  declare total: number;

  static associate({ CartItem }) {
    Cart.hasMany(CartItem, {
      sourceKey: 'id',
      foreignKey: 'cartId',
      as: 'cartItems'
    });
  }
}

Cart.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  customerId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtotal: {
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
  tableName: 'carts',
  underscored: true,
  timestamps: true,
});

export default Cart;
