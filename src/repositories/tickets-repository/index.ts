import { prisma } from "@/config";

async function getTickets() {
    return prisma.ticketType.findMany();
}

const ticketsRepository = {
    getTickets,
};

export default ticketsRepository;