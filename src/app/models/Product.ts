import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'database/config';

export type ProductAttributes = {
  id: number;
  name: string;
  stock: number;
  price: number;
}

type ProductCreationAttributes = Optional<ProductAttributes, 'id'>;

class Product extends Model<ProductAttributes, ProductCreationAttributes> {
  declare id: string;
  declare name: string;
  declare stock: number;
  declare price: number;
} 

Product.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, 
{ 
  sequelize,
  tableName: 'products',
  underscored: true,
  timestamps: true,
});

export default Product;
