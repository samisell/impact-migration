export interface ApplicationData {
  fullName: string;
  email: string;
  phone?: string;
  preferredCountry?: string;
  courseType?: string;
  courseOfInterest?: string;
  educationLevel?: string;
  fundingSource?: string;
  message?: string;
}

export interface AppointmentData {
  fullName: string;
  email: string;
  phone?: string;
  preferredCountry?: string;
  studyLevel?: string;
  counsellingMode?: string;
  startDate?: string;
  fundingSource?: string;
  message?: string;
}

export interface ContactData {
  fullName: string;
  email: string;
  subject?: string;
  message: string;
}

export async function submitApplication(data: ApplicationData) {
  const res = await fetch('/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to submit application');
  }
  return res.json();
}

export async function fetchApplications() {
  const res = await fetch('/api/applications');
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to fetch applications');
  }
  return res.json();
}

export async function deleteApplication(id: string | number) {
  const res = await fetch(`/api/applications/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to delete application');
  }
  return res.json();
}

export async function submitAppointment(data: AppointmentData) {
  const res = await fetch('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to book appointment');
  }
  return res.json();
}

export async function fetchAppointments() {
  const res = await fetch('/api/appointments');
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to fetch appointments');
  }
  return res.json();
}

export async function deleteAppointment(id: string | number) {
  const res = await fetch(`/api/appointments/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to delete appointment');
  }
  return res.json();
}

export async function submitContact(data: ContactData) {
  const res = await fetch('/api/contacts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to submit message');
  }
  return res.json();
}

export async function fetchContacts() {
  const res = await fetch('/api/contacts');
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to fetch contacts');
  }
  return res.json();
}

export async function deleteContact(id: string | number) {
  const res = await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to delete contact');
  }
  return res.json();
}

export async function subscribeNewsletter(email: string) {
  const res = await fetch('/api/subscribers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to subscribe');
  }
  return res.json();
}

export async function adminLogin(email: string, password: string) {
  const res = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Invalid credentials');
  }
  return res.json();
}
