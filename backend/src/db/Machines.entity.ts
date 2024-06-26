//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Machines')
export class MachinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  machineName: string;

  @Column('text', { nullable: true })
  status: string;

  @Column('integer', { nullable: true })
  employee: number;

  @Column('text', { nullable: true })
  work: string;

  @Column('date', { nullable: true })
  lastMaintainance: Date;
}
