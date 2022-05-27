import { DiceEvent } from "../../types/events";
import BaseApi from "../base";

export type Links = {
  next: string;
  self: string;
};

export type EventsResponse = {
  data: DiceEvent[];
  links: Links;
};

export const EVENTS_BASE_PATH = "/events";

class EventsService extends BaseApi {
  protected basePath = EVENTS_BASE_PATH;

  getEvents(venues = "", size = 12, number = 1) {
    const venueFilterString = venues.length ? `&filter[venues]=${venues}` : "";
    return this.get<EventsResponse>(
      `?page[size]=${size}&page[number]=${number}${venueFilterString}`
    );
  }
}

export default EventsService;
