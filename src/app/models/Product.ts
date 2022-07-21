import { Table, Model, Column, DataType, PrimaryKey, AllowNull, Default } from 'sequelize-typescript';
@Table({
  tableName: 'products',
  underscored: true,
  timestamps: true,
})
class Product extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    stock: number;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
    price: number;
}

export default Product;
