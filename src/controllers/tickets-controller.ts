import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import ticketsService from "@/services/tickets-service";

export async function getTickets(req: AuthenticatedRequest, res: Response) {

    try {
        const tickets = await ticketsService.getTickets()
        return res.status(httpStatus.OK).send(tickets)
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND)
        }
        return res.status(httpStatus.BAD_REQUEST).send(err)
    }
}

export async function getUserTickets(req: AuthenticatedRequest, res: Response) {

    try {

    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND)
        }
        return res.status(httpStatus.BAD_REQUEST).send(err)
    }
}

export async function postTickets(req: AuthenticatedRequest, res: Response) {

    try {

    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND)
        }
        return res.status(httpStatus.BAD_REQUEST).send(err)
    }
}