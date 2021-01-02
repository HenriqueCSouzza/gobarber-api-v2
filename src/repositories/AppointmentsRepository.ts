import { isEqual } from 'date-fns';
import Appointment from '../domains/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepositories {
  private appointments: Appointment[] = [];

  constructor() {
    this.appointments = [];
  }

  public list(): Appointment[] {
    const appointmentList = this.appointments;

    return appointmentList;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);
    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointmentDate = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointmentDate || null;
  }
}

export default AppointmentsRepositories;
