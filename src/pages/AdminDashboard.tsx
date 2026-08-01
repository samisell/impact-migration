import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LayoutDashboard, Users, MessageSquare, Settings, LogOut, Search, Trash2, Eye, TrendingUp, Globe, CheckCircle, Calendar, Mail, UserCheck } from 'lucide-react';
import { Lead, ContactMessage } from '../types';
import { 
  fetchApplications, 
  fetchAppointments, 
  fetchContacts, 
  fetchSubscribers, 
  fetchRegisteredUsers,
  deleteApplication, 
  deleteAppointment,
  deleteContact,
  deleteSubscriber,
  deleteRegisteredUser
} from '../lib/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'applications' | 'appointments' | 'messages' | 'subscribers' | 'users'>('applications');
  const [applications, setApplications] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [registeredUsers, setRegisteredUsers] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('admin_user');
    if (!savedUser) {
      setUser({ email: 'admin@impactmigration.com' });
    } else {
      setUser(JSON.parse(savedUser));
    }
    fetchData();
  }, [navigate, activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'applications') {
        const data = await fetchApplications();
        setApplications(data);
      } else if (activeTab === 'appointments') {
        const data = await fetchAppointments();
        setAppointments(data);
      } else if (activeTab === 'messages') {
        const data = await fetchContacts();
        setMessages(data);
      } else if (activeTab === 'subscribers') {
        const data = await fetchSubscribers();
        setSubscribers(data);
      } else if (activeTab === 'users') {
        const data = await fetchRegisteredUsers();
        setRegisteredUsers(data);
      }
    } catch (err) {
      console.error('Error fetching data from PostgreSQL:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  };

  const handleDelete = async (id: string | number) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;
    
    try {
      if (activeTab === 'applications') {
        await deleteApplication(id);
        setApplications(applications.filter(l => String(l.$id) !== String(id)));
      } else if (activeTab === 'appointments') {
        await deleteAppointment(id);
        setAppointments(appointments.filter(a => String(a.$id) !== String(id)));
      } else if (activeTab === 'messages') {
        await deleteContact(id);
        setMessages(messages.filter(m => String(m.$id) !== String(id)));
      } else if (activeTab === 'subscribers') {
        await deleteSubscriber(id);
        setSubscribers(subscribers.filter(s => String(s.$id) !== String(id)));
      } else if (activeTab === 'users') {
        await deleteRegisteredUser(id);
        setRegisteredUsers(registeredUsers.filter(u => String(u.$id) !== String(id)));
      }
    } catch (err) {
      console.error('Error deleting item from PostgreSQL:', err);
    }
  };

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const getCurrentList = () => {
    switch (activeTab) {
      case 'applications': return applications;
      case 'appointments': return appointments;
      case 'messages': return messages;
      case 'subscribers': return subscribers;
      case 'users': return registeredUsers;
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-neutral flex">
      {/* Sidebar */}
      <aside className="w-72 bg-ink text-white p-8 hidden lg:flex flex-col">
        <div className="flex items-center gap-3 mb-16">
          <div className="bg-primary p-2 rounded-lg">
            <Globe className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight">Impact <span className="text-primary">Admin</span></span>
        </div>

        <nav className="space-y-3 flex-grow">
          <button
            onClick={() => setActiveTab('applications')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'applications' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Users size={20} /> Applications
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'appointments' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Calendar size={20} /> Appointments
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'messages' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <MessageSquare size={20} /> Messages
          </button>
          <button
            onClick={() => setActiveTab('subscribers')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'subscribers' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Mail size={20} /> Subscribers
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'users' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <UserCheck size={20} /> Registered Users
          </button>
        </nav>

        <button onClick={handleLogout} className="flex items-center gap-4 text-red-400 p-4 rounded-2xl hover:bg-red-400/10 transition-colors mt-auto">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-ink mb-2 capitalize">
              {activeTab === 'users' ? 'Registered Users' : activeTab}
            </h1>
            <p className="text-muted text-sm">Welcome back, {user?.email || 'Admin'}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {user?.email?.charAt(0).toUpperCase() || 'A'}
            </div>
          </div>
        </header>

        {/* List Table */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-ink capitalize">
              Recent {activeTab === 'users' ? 'Registered Users' : activeTab} ({getCurrentList().length})
            </h3>
            <button onClick={fetchData} className="text-primary font-bold text-sm hover:underline">Refresh</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral text-muted text-xs font-bold uppercase tracking-widest">
                  <th className="px-8 py-4">Name / Contact</th>
                  <th className="px-8 py-4">Email</th>
                  <th className="px-8 py-4">Details</th>
                  <th className="px-8 py-4">Date</th>
                  <th className="px-8 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center text-muted">Loading data from PostgreSQL...</td>
                  </tr>
                ) : getCurrentList().length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center text-muted">No records found in this table.</td>
                  </tr>
                ) : (
                  getCurrentList().map((item: any) => (
                    <tr key={item.$id} className="hover:bg-neutral/50 transition-colors group">
                      <td className="px-8 py-6 font-bold text-ink">
                        {item.fullName || (item.firstName ? `${item.firstName} ${item.surname || ''}` : item.email)}
                      </td>
                      <td className="px-8 py-6 text-muted">{item.email}</td>
                      <td className="px-8 py-6">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">
                          {item.preferredCountry || item.subject || item.counsellingMode || item.countryOfResidence || 'Subscriber'}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-muted text-sm">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <button onClick={() => openModal(item)} className="p-2 text-muted hover:text-primary transition-colors">
                            <Eye size={18} />
                          </button>
                          <button onClick={() => handleDelete(item.$id!)} className="p-2 text-muted hover:text-red-500 transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="p-10 border-b border-gray-100 flex justify-between items-center bg-neutral">
              <h3 className="text-2xl font-bold text-ink capitalize">{activeTab} Details</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-muted hover:text-ink transition-colors font-bold">✕</button>
            </div>
            
            <div className="p-10 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Name</p>
                  <p className="text-lg font-bold text-ink">
                    {selectedItem.fullName || (selectedItem.firstName ? `${selectedItem.firstName} ${selectedItem.surname || ''}` : selectedItem.email)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-lg font-bold text-ink">{selectedItem.email}</p>
                </div>
              </div>

              {selectedItem.phone && (
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Phone Number</p>
                  <p className="text-base font-bold text-ink">{selectedItem.phone}</p>
                </div>
              )}

              {selectedItem.preferredCountry && (
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Preferred Country / Destination</p>
                  <p className="text-base font-bold text-ink">{selectedItem.preferredCountry}</p>
                </div>
              )}

              {selectedItem.subject && (
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Subject</p>
                  <p className="text-base font-bold text-ink">{selectedItem.subject}</p>
                </div>
              )}

              {selectedItem.message && (
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Message / Content</p>
                  <p className="text-ink leading-relaxed bg-neutral p-5 rounded-2xl whitespace-pre-wrap">{selectedItem.message}</p>
                </div>
              )}

              {selectedItem.createdAt && (
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Date Submitted</p>
                  <p className="text-sm font-semibold text-muted">{new Date(selectedItem.createdAt).toLocaleString()}</p>
                </div>
              )}
            </div>
            
            <div className="p-8 bg-neutral flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="btn-primary py-2.5 px-8">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

