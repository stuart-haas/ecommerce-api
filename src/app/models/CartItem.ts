import { Table, Model, Column, DataType, PrimaryKey, AllowNull, Default } from 'sequelize-typescript';

@Table({
  tableName: 'cart_items',
  underscored: true,
  timestamps: true,
})
class CartItem extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataType.UUID,
  })
    cartId: string;

  @AllowNull(false)
  @Column({
    type: DataType.UUID,
  })
    productId: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    quantity: number;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
    price: number;
  
  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
    total: number;
}

export default CartItem;
