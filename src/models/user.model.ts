// user.model.ts
import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Alarm } from './alarm.model';

@Table
export class User extends Model {
  @Column
  fullname: string;

  @Column
  celNumber: string;

  @HasMany(() => Alarm)
  alarms: Alarm[];
}
