'use server';
 
import webpush from 'web-push';
 
webpush.setVapidDetails(
  'mailto:thepollies.thomas@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || '',
  process.env.VAPID_PRIVATE_KEY || ''
);
 
let subscription = null;

// Example subscription object for testing purposes
// Remove this in production and ensure `subscribeUser` is called with a valid subscription
if (!subscription) {
  subscription = {
    endpoint: 'https://example.com',
    keys: {
      p256dh: 'testKey',
      auth: 'testAuth',
    },
  };
}
 
export async function subscribeUser(sub) {
  if (!sub) {
    throw new Error('Invalid subscription object');
  }
  subscription = sub;
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true };
}
 
export async function unsubscribeUser() {
  subscription = null;
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}
 
export async function sendNotification(message) {
  if (!subscription) {
    throw new Error('No subscription available');
  }
 
  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/icon.png',
      })
    );
    return { success: true };
  } catch (error) {
    console.error('Error sending push notification:', error);
    return { success: false, error: 'Failed to send notification' };
  }
}