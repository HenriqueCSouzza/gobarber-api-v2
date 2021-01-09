import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../domains/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepositories extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointmentDate = await this.findOne({
      where: { date },
    });

    return findAppointmentDate || null;
  }
}

export default AppointmentsRepositories;
