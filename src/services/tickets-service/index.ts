import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";
import { TicketStatus } from "@prisma/client";


async function getTickets() {
    const tickets = ticketsRepository.getTickets()

    if (!tickets) {
        throw notFoundError();
    }

    return tickets;
}

async function getUserTickets(userId: number) {
    const enrollment = await ticketsRepository.getEnrollmentByUserId(userId)
    if (!enrollment) {
        throw notFoundError();
    }
    const userTickets = await ticketsRepository.getUserTickets(enrollment.id)
    if (!userTickets) {
        throw notFoundError();
    }

    return userTickets;
}

async function postTickets(userId: number, ticketTypeId: number) {
    const enrollment = await ticketsRepository.getEnrollmentByUserId(userId)
    if (!enrollment) {
        throw notFoundError();
    }

    const ticket = await ticketsRepository.createTickets(enrollment.id, ticketTypeId);

    if (!ticket) {
        throw notFoundError();
    }
    const ticketType = await ticketsRepository.findTicketsType(ticket.ticketTypeId);
    return { ...ticket, TicketType: ticketType };
}

const ticketsService = {
    getTickets, getUserTickets, postTickets
};

export default ticketsService;
