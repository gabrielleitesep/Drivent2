import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import ticketsService from "@/services/tickets-service";

export async function getTickets(req:AuthenticatedRequest, res:Response) {

  try {
    const tickets = await ticketsService.getTickets();
    return res.status(httpStatus.OK).send(tickets);
  } catch (err) {
    if (err.name === "NotFoundError") {
        return res.sendStatus(httpStatus.NOT_FOUND)
    }
    return res.status(httpStatus.BAD_REQUEST).send(err)
  }
}

export async function getUserTickets(req: AuthenticatedRequest, res: Response) {

    const { userId } = req;

    try {
        const userTickets = await ticketsService.getUserTickets(userId)
        return res.status(httpStatus.OK).send(userTickets)
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND)
        }
        return res.status(httpStatus.BAD_REQUEST).send(err)
    }
}

export async function postTickets(req: AuthenticatedRequest, res: Response) {

    const { ticketTypeId } = req.body;
    const { userId } = req;

    if (!ticketTypeId) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    try {
        const ticket = await ticketsService.postTickets(ticketTypeId, userId);
        return res.status(httpStatus.CREATED).send(ticket);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.status(httpStatus.BAD_REQUEST).send(err)
    }
}