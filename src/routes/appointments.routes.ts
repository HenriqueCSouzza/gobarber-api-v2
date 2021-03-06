import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointmentsList = await appointmentsRepository.find();

  return response.json(appointmentsList);
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;
    const parsedDate = parseISO(date);
    const createAppointment = new CreateAppointmentService();
    const appoitment = await createAppointment.execute({
      provider,
      date: parsedDate,
    });
    return response.json(appoitment);
  } catch (e) {
    return response.status(400).json({ message: e.message });
  }
});

export default appointmentsRouter;
