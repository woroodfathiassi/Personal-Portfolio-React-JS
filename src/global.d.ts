declare function gtag(
    command: 'config' | 'event' | 'set' | 'js',
    targetId: string | Date,
    config?: Record<string, any>
): void;

declare function gtag(
    command: string,
    ...fields: any[]
): void;

interface Window {
    dataLayer: any[];
}