//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Employees')
export class EmployeesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('date', { nullable: true })
  date: Date;

  @Column('date', { nullable: true })
  time: Date;

  @Column('integer', { nullable: true })
  machine: number;

  @Column('integer', { nullable: true })
  production: number;

  @Column('integer', { nullable: true })
  frame: number;

  @Column('integer', { nullable: true })
  stitch: number;

  @Column('text', { nullable: true })
  photo: string;
}
