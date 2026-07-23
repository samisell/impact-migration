import { CONTACT_INFO } from '../constants';

export interface EmailPayload {
  formName: string;
  subject: string;
  senderName?: string;
  senderEmail?: string;
  data: Record<string, any>;
}

/**
 * Utility to send form submissions to info@impactmigration.com
 * Uses FormSubmit AJAX endpoint as primary, with window.open mailto fallback.
 */
export async function sendEmailNotification(payload: EmailPayload): Promise<{ success: boolean; method: string }> {
  const recipientEmail = CONTACT_INFO.email; // info@impactmigration.com

  // Construct structured body text
  let bodyLines = [
    `NEW FORM SUBMISSION: ${payload.formName.toUpperCase()}`,
    `Date: ${new Date().toLocaleString()}`,
    `----------------------------------------`,
  ];

  if (payload.senderName) bodyLines.push(`Name: ${payload.senderName}`);
  if (payload.senderEmail) bodyLines.push(`Email: ${payload.senderEmail}`);

  bodyLines.push(`\nDETAILS:`);
  Object.entries(payload.data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      // Format key from camelCase to Title Case
      const formattedKey = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
      bodyLines.push(`${formattedKey}: ${value}`);
    }
  });

  const fullText = bodyLines.join('\n');

  try {
    // Attempt 1: Send via FormSubmit.co AJAX to recipient
    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `[${payload.formName}] ${payload.subject}`,
        _template: 'table',
        _captcha: 'false',
        form_name: payload.formName,
        sender_name: payload.senderName || 'Website User',
        sender_email: payload.senderEmail || 'N/A',
        message: fullText,
        ...payload.data
      }),
    });

    if (response.ok) {
      console.log(`Email successfully dispatched via FormSubmit for ${payload.formName}`);
      return { success: true, method: 'api' };
    }
  } catch (err) {
    console.warn('FormSubmit endpoint unavailable, falling back to mailto link', err);
  }

  // Fallback / Backup: Trigger mailto client
  try {
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      `[Impact Migration] ${payload.formName}: ${payload.subject}`
    )}&body=${encodeURIComponent(fullText)}`;
    
    // Open mailto link in a hidden iframe or new window if necessary
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.click();

    return { success: true, method: 'mailto' };
  } catch (e) {
    console.error('Mailto trigger failed', e);
    return { success: false, method: 'none' };
  }
}
