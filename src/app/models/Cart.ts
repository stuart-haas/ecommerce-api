import { Table, Model, Column, DataType, PrimaryKey, AllowNull, Default } from 'sequelize-typescript';

@Table({
  tableName: 'carts',
  underscored: true,
  timestamps: true,
})
class Cart extends Model {
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
    customerId: string;
  
  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
    subtotal: number;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
    total: number;
}

export default Cart;
