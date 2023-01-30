import { prisma } from "@/config";

async function getTickets() {
    return prisma.ticketType.findMany();
}

async function getUserTickets(enrollmentId: number) {
    const result = await prisma.ticket.findFirst({
        where: {
          enrollmentId
        },
        include: {
          TicketType: true
        }
      })

      return result
}

const ticketsRepository = {
    getTickets, getUserTickets
};

export default ticketsRepository;