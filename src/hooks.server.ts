import { adminAuth } from '$lib/server/admin';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const sessionCookie = event.cookies.get('__session');

  try {
    const decoded = await adminAuth.verifySessionCookie(sessionCookie!);
    event.locals.userID = decoded.uid;
  } catch (e) {
    event.locals.userID = null;
    return resolve(event);
  }

  return resolve(event);
}) satisfies Handle;
