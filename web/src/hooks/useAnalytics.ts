import { useEffect } from 'react';

type EventName = 'page_view' | 'scroll_depth_50' | 'waitlist_submit' | 'pdf_open';

export const useAnalytics = () => {
  const trackEvent = (eventName: EventName, properties?: Record<string, any>) => {
    // Console log for development
    if (import.meta.env.DEV) {
      console.log('[Analytics]', eventName, properties);
    }

    // Future: Google Analytics 4 implementation
    // if (window.gtag) {
    //   window.gtag('event', eventName, properties);
    // }

    // Future: PostHog implementation
    // if (window.posthog) {
    //   window.posthog.capture(eventName, properties);
    // }
  };

  useEffect(() => {
    trackEvent('page_view');

    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
      if (scrollPercent > 50) {
        trackEvent('scroll_depth_50');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { trackEvent };
};
