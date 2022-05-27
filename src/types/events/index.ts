// these types are rough translations of the data structure from the docs
// some attributes have been left vague to to time constraints

export type DiceEvent = {
  age_limit: string;
  sale_end_date: string;
  raw_description: string;
  status: string;
  images: string[];
  apple_music_tracks: AppleMusicTrack[];
  event_images: EventImages;
  name: string;
  presented_by: string;
  genre_tags: [{}];
  hash: string;
  venue: string;
  detailed_artists: Artist[];
  type: string;
  price: null;
  venues: Venue[];
  url: string;
  address: string;
  announcement_date: string;
  currency: string;
  id: string;
  spotify_tracks: SpotifyTrack[];
  show_price_breakdown: true;
  ticket_types: TicketType[];
  external_url: null;
  promoters: Promoter[];
  int_id: number;
  destination_event_perm_name: null;
  type_tags: [{}];
  cities: City[];
  checksum: string;
  featured: true;
  sold_out: true;
  date: string;
  date_end: string;
  location: Location;
  flags: [{}];
  perm_name: string;
  links: [{}];
  artists: string[];
  timezone: string;
  tags: [{}];
  destination_event_id: null;
  sale_start_date: string;
  lineup: SetDetail[];
  linkout_type: null;
  description: string;
};

export type Location = {
  accuracy: number;
  city: string;
  country: string;
  lat: number;
  lng: number;
  place: string;
};

export type SetDetail = {
  details: string;
  time: string;
};

export type City = {
  code: string;
  country_alpha3: string;
  country_id: string;
  country_name: string;
  id: string;
  name: string;
};

export type Promoter = {
  id: number;
  name: string;
};

export type TicketType = {
  id: number;
  name: string;
  price: {
    face_value: number;
    fees: number;
    total: number;
  };
  sold_out: boolean;
};

export type SpotifyTrack = {
  open_url: string;
  preview_url: string;
  title: string;
};

export type AppleMusicTrack = {
  open_url: string;
  preview_url: string;
  title: string;
};

export type Venue = {
  city: City;
  id: number;
  name: string;
};

export type Artist = {
  headliner: true;
  id: number;
  name: string;
};

export type EventImages = {
  brand: null;
  landscape: string;
  portrait: string;
  square: string;
};
