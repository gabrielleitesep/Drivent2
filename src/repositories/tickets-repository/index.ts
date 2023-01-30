import { prisma } from "@/config";
import { TicketStatus } from "@prisma/client";

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

async function getEnrollmentByUserId(userId: number) {
    return prisma.enrollment.findFirst({
        where: { userId },
    });
}

async function createTickets(ticketTypeId: number, enrollmentId: number) {
    return prisma.ticket.create({
        data: {
            ticketTypeId,
            status: TicketStatus.RESERVED,
            enrollmentId,
        },
    })
}

async function findTicketsType(id: number) {
    return prisma.ticketType.findFirst({
        where: { id },
    });
}

const ticketsRepository = {
    getTickets, getUserTickets, getEnrollmentByUserId, createTickets, findTicketsType
};

export default ticketsRepository;