export interface TrackedLocation {
    ip:       string;
    location: Location;
    domains: string[];
    as:       As;
    isp:      string;
  }
  
  export interface As {
    asn:    number;
    name:   string;
    route:  string;
    domain: string;
    type:   string;
  }
  
  export interface Location {
    country:  string;
    region:   string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: string
  }



  export interface LocationState {
    isLoading: boolean;
    isError: boolean;
  }