import React, { FC, useEffect } from "react";
import {
  newTracker,
  addGlobalContexts,
  clearGlobalContexts,
  trackPageView as spTrackPageView,
  enableActivityTracking,
  setUserId,
  trackSelfDescribingEvent,
  SelfDescribingJson,
} from "@snowplow/browser-tracker";

type SnowplowClient = {
  trackSelfDescribingEvent: (schema: string, data: Record<string, any>) => void;
  trackPageView: () => void;
  clearGlobalContexts: () => void;
  setUserId: (userId: string) => void;
  addGlobalContexts: (context: SelfDescribingJson[]) => void;
};

export const SnowplowContext = React.createContext<SnowplowClient | undefined>(
  undefined
);

export type Collector = {
  name: string;
  endpoint: string;
  cookieName: string;
};

type SnowplowProviderProps = {
  appId: string;
  collectors: Collector[];
};

export const SnowplowProvider: FC<SnowplowProviderProps> = ({
  appId,
  collectors,
  children,
}) => {
  useEffect(() => {
    collectors.forEach((collector) => {
      newTracker(collector.name, collector.endpoint, {
        appId,
        cookieDomain: ".snowplowanalytics.com",
        cookieName: collector.cookieName,
      });
    });
  }, [collectors, appId]);

  enableActivityTracking({ heartbeatDelay: 30, minimumVisitLength: 30 });

  const value = {
    trackSelfDescribingEvent: (schema: string, data: Record<string, any>) =>
      trackSelfDescribingEvent({
        event: {
          schema,
          data,
        },
      }),
    trackPageView: spTrackPageView,
    clearGlobalContexts: clearGlobalContexts,
    setUserId: (userId: string) => setUserId(userId),
    addGlobalContexts: (contexts: SelfDescribingJson[]) =>
      addGlobalContexts(contexts),
  };

  return (
    <SnowplowContext.Provider value={value}>
      {children}
    </SnowplowContext.Provider>
  );
};
