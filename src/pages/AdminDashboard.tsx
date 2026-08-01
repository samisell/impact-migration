import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LayoutDashboard, Users, MessageSquare, Settings, LogOut, Search, Trash2, Eye, TrendingUp, Globe, CheckCircle } from 'lucide-react';
import { Lead, ContactMessage } from '../types';
import { fetchApplications, fetchContacts, deleteApplication, deleteContact } from '../lib/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'leads' | 'messages'>('leads');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('admin_user');
    if (!savedUser) {
      // Allow demo user if no login present
      setUser({ email: 'admin@impactmigration.com' });
    } else {
      setUser(JSON.parse(savedUser));
    }
    fetchData();
  }, [navigate, activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'leads') {
        const data = await fetchApplications();
        setLeads(data);
      } else {
        const data = await fetchContacts();
        setMessages(data);
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
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      if (activeTab === 'leads') {
        await deleteApplication(id);
        setLeads(leads.filter(l => String(l.$id) !== String(id)));
      } else {
        await deleteContact(id);
        setMessages(messages.filter(m => String(m.$id) !== String(id)));
      }
    } catch (err) {
      console.error('Error deleting item from PostgreSQL:', err);
    }
  };

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
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

        <nav className="space-y-4 flex-grow">
          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'leads' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'leads' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Users size={20} /> Applications
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'messages' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <MessageSquare size={20} /> Messages
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
            <h1 className="text-3xl font-bold text-ink mb-2">
              {activeTab === 'leads' ? 'Applications' : 'Contact Messages'}
            </h1>
            <p className="text-muted text-sm">Welcome back, {user?.name || 'Admin'}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {user?.name?.charAt(0) || 'A'}
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <Users size={24} />
              </div>
            </div>
            <p className="text-muted text-sm font-bold uppercase tracking-widest mb-2">Applications</p>
            <h3 className="text-4xl font-bold text-ink">{leads.length}</h3>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                <MessageSquare size={24} />
              </div>
            </div>
            <p className="text-muted text-sm font-bold uppercase tracking-widest mb-2">Messages</p>
            <h3 className="text-4xl font-bold text-ink">{messages.length}</h3>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-ink/5 p-4 rounded-2xl text-ink">
                <Globe size={24} />
              </div>
            </div>
            <p className="text-muted text-sm font-bold uppercase tracking-widest mb-2">Countries</p>
            <h3 className="text-4xl font-bold text-ink">8</h3>
          </div>
        </div>

        {/* List Table */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-ink">Recent {activeTab === 'leads' ? 'Applications' : 'Messages'}</h3>
            <button onClick={fetchData} className="text-primary font-bold text-sm hover:underline">Refresh</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral text-muted text-xs font-bold uppercase tracking-widest">
                  <th className="px-8 py-4">Name</th>
                  <th className="px-8 py-4">Email</th>
                  <th className="px-8 py-4">{activeTab === 'leads' ? 'Country' : 'Subject'}</th>
                  <th className="px-8 py-4">Date</th>
                  <th className="px-8 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center text-muted">Loading...</td>
                  </tr>
                ) : (activeTab === 'leads' ? leads : messages).length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center text-muted">No records found.</td>
                  </tr>
                ) : (
                  (activeTab === 'leads' ? leads : messages).map((item: any) => (
                    <tr key={item.$id} className="hover:bg-neutral/50 transition-colors group">
                      <td className="px-8 py-6 font-bold text-ink">{item.fullName}</td>
                      <td className="px-8 py-6 text-muted">{item.email}</td>
                      <td className="px-8 py-6">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">
                          {activeTab === 'leads' ? item.preferredCountry : item.subject}
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
              <h3 className="text-2xl font-bold text-ink">{activeTab === 'leads' ? 'Application Details' : 'Message Details'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-muted hover:text-ink transition-colors font-bold">X</button>
            </div>
            
            <div className="p-10 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Full Name</p>
                  <p className="text-lg font-bold text-ink">{selectedItem.fullName}</p>
                </div>
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-lg font-bold text-ink">{selectedItem.email}</p>
                </div>
              </div>
              
              {activeTab === 'leads' ? (
                <>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Phone Number</p>
                      <p className="text-lg font-bold text-ink">{selectedItem.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Preferred Country</p>
                      <p className="text-lg font-bold text-ink">{selectedItem.preferredCountry}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Course</p>
                      <p className="text-lg font-bold text-ink">{selectedItem.courseOfInterest}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Education</p>
                      <p className="text-lg font-bold text-ink">{selectedItem.educationLevel}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Subject</p>
                  <p className="text-lg font-bold text-ink">{selectedItem.subject}</p>
                </div>
              )}
              
              <div>
                <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Message</p>
                <p className="text-ink leading-relaxed bg-neutral p-6 rounded-2xl">{selectedItem.message || 'No message provided.'}</p>
              </div>
            </div>
            
            <div className="p-10 bg-neutral flex justify-end gap-4">
              <button onClick={() => setIsModalOpen(false)} className="btn-outline py-2 px-6">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

