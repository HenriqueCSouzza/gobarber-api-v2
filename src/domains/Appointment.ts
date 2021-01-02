import { v4 } from 'uuid';

class Appointment {
  uuid: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'uuid'>) {
    this.uuid = v4();
    this.provider = provider;
    this.date = date;
  }
}
export default Appointment;
