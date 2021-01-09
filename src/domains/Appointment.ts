import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}
export default Appointment;
