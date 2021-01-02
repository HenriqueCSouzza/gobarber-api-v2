import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;
    const parsedDate = parseISO(date);
    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );
    const appoitment = createAppointment.execute({
      provider,
      date: parsedDate,
    });
    return response.json(appoitment);
  } catch (e) {
    return response.status(400).json({ message: e.message });
  }
});

appointmentsRouter.get('/', (request, response) => {
  const appointmentsList = appointmentsRepository.list();

  return response.json(appointmentsList);
});

export default appointmentsRouter;
