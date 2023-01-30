import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";


async function getTickets() {
    const tickets = ticketsRepository.getTickets()

    if (!tickets) {
        throw notFoundError();
    }

    return tickets;
}

const ticketsService = {
    getTickets,
};

export default ticketsService;
