import React, { createContext, useContext, useEffect, useState } from "react";
import type { NewsItem, EventItem, Birthday, WeatherCity, DocItem, StatItem } from "../types";
import {
  fetchSideNews,
  fetchEvents,
  fetchBirthdays,
  fetchWeather,
  fetchDocs,
  fetchExternalNews,
  fetchStats,
} from "../services/intranetService";

// ─── Tipos ───────────────────────────────────────────────────────────────────

type IntranetState = {
  loading: boolean;
  sideNews: NewsItem[];
  events: EventItem[];
  birthdays: Birthday[];
  weather: WeatherCity[];
  docs: DocItem[];
  externalNews: NewsItem[];
  stats: StatItem[];
};

const initialState: IntranetState = {
  loading: true,
  sideNews: [],
  events: [],
  birthdays: [],
  weather: [],
  docs: [],
  externalNews: [],
  stats: [],
};

// ─── Context ─────────────────────────────────────────────────────────────────

const IntranetContext = createContext<IntranetState>(initialState);

// ─── Provider ────────────────────────────────────────────────────────────────

export function IntranetProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<IntranetState>(initialState);

  useEffect(() => {
    Promise.all([
      fetchSideNews(),
      fetchEvents(),
      fetchBirthdays(),
      fetchWeather(),
      fetchDocs(),
      fetchExternalNews(),
      fetchStats(),
    ]).then(([sideNews, events, birthdays, weather, docs, externalNews, stats]) => {
      setState({ loading: false, sideNews, events, birthdays, weather, docs, externalNews, stats });
    });
  }, []);

  return (
    <IntranetContext.Provider value={state}>
      {children}
    </IntranetContext.Provider>
  );
}

// ─── Hook de consumo ─────────────────────────────────────────────────────────

export function useIntranet() {
  return useContext(IntranetContext);
}
