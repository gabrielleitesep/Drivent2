import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketsRepository from "@/repositories/tickets-repository";


async function getTickets() {
    const tickets = ticketsRepository.getTickets()

    if (!tickets) {
        throw notFoundError();
    }

    return tickets;
}

async function getUserTickets(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId)
    if (!enrollment) {
        throw notFoundError();
    }
    const userTickets = await ticketsRepository.getUserTickets(userId)
    if (!userTickets) {
        throw notFoundError();
    }

    return userTickets;
}

const ticketsService = {
    getTickets, getUserTickets
};

export default ticketsService;
