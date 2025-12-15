// Google Analytics and tracking utilities

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        fbq?: (...args: any[]) => void;
    }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

// Google Analytics: Track page views
export const pageview = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Google Analytics: Track events
export const event = ({ action, category, label, value }: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Track lead magnet downloads
export const trackLeadMagnetDownload = (ebookName: string) => {
    event({
        action: 'lead_magnet_download',
        category: 'Lead Generation',
        label: ebookName,
    });

    // Facebook Pixel
    if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'Lead', {
            content_name: ebookName,
            content_category: 'Lead Magnet',
        });
    }
};

// Track form submissions
export const trackFormSubmission = (formType: string) => {
    event({
        action: 'form_submission',
        category: 'Lead Generation',
        label: formType,
    });

    // Facebook Pixel
    if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'Contact', {
            content_name: formType,
        });
    }
};

// Track Calendly booking initiated
export const trackCalendlyClick = () => {
    event({
        action: 'calendly_click',
        category: 'Engagement',
        label: 'Schedule Consultation',
    });

    // Facebook Pixel
    if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'Schedule', {
            content_name: 'Free Consultation',
        });
    }
};

// Track outbound link clicks
export const trackOutboundLink = (url: string, label: string) => {
    event({
        action: 'outbound_link',
        category: 'Navigation',
        label: `${label}: ${url}`,
    });
};

// Track video plays (for future video content)
export const trackVideoPlay = (videoName: string) => {
    event({
        action: 'video_play',
        category: 'Engagement',
        label: videoName,
    });
};

// UTM Parameter builder
export const buildUTMUrl = (
    baseUrl: string,
    source: string,
    medium: string,
    campaign: string,
    content?: string,
    term?: string
): string => {
    const params = new URLSearchParams({
        utm_source: source,
        utm_medium: medium,
        utm_campaign: campaign,
    });

    if (content) params.append('utm_content', content);
    if (term) params.append('utm_term', term);

    return `${baseUrl}?${params.toString()}`;
};
