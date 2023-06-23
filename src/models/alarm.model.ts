// alarm.model.ts
import { Column, DataType, BelongsTo,  Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Alarm extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  body: string;

  @Column
  subject: string;

  @Column({ defaultValue: 0 })
  msgState: number;

  @Column
  fecha: Date;
  
  
  @BelongsTo(() => User)
  user: User;
}
