import * as Sentry from '@sentry/nextjs';

type LogLevel = 'fatal' | 'error' | 'warning' | 'info' | 'debug';

export function logEvent(
    message: string,
    category: string = 'general',
    data?: Record<string, any>,
    level: LogLevel = 'info',
    error?: unknown
) {
    Sentry.addBreadcrumb({
        category,
        message,
        data,
        level,
    });

    if (error) {
        Sentry.captureException(error, { extra: data });
    } else {
        Sentry.captureMessage(message, level);
    }
}

export const getPriorityClass = (priority: string) => {
    switch (priority) {
        case 'High':
            return 'text-red-600 font-bold';
        case 'Medium':
            return 'text-yellow-600 font-bold';
        case 'Low':
            return "text-green-600 font-bold"
    }
}