import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Settings, LogOut, Search, MoreVertical, Trash2, Eye, TrendingUp, Globe, CheckCircle } from 'lucide-react';
import { databases, account } from '../lib/appwrite';
import { Lead } from '../types';
import { Query } from 'appwrite';

const AdminDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
        fetchLeads();
      } catch (err) {
        // Redirect to login if not authenticated
        navigate('/admin/login');
      }
    };
    checkUser();
  }, [navigate]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      if (databaseId && collectionId) {
        const response = await databases.listDocuments(
          databaseId,
          collectionId,
          [Query.orderDesc('createdAt')]
        );
        setLeads(response.documents as any);
      } else {
        // Mock data if Appwrite is not configured
        const mockLeads: Lead[] = [
          { $id: '1', fullName: 'John Doe', email: 'john@example.com', phone: '+234 800 123 4567', preferredCountry: 'UK', courseOfInterest: 'Computer Science', educationLevel: 'Postgraduate', message: 'I want to study in the UK.', createdAt: new Date().toISOString() },
          { $id: '2', fullName: 'Jane Smith', email: 'jane@example.com', phone: '+234 800 123 4568', preferredCountry: 'Canada', courseOfInterest: 'MBA', educationLevel: 'Postgraduate', message: 'Interested in Canada.', createdAt: new Date().toISOString() },
          { $id: '3', fullName: 'Michael Obi', email: 'michael@example.com', phone: '+234 800 123 4569', preferredCountry: 'USA', courseOfInterest: 'Engineering', educationLevel: 'Undergraduate', message: 'USA is my dream.', createdAt: new Date().toISOString() }
        ];
        setLeads(mockLeads);
      }
    } catch (err) {
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/admin/login');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    
    try {
      if (databaseId && collectionId) {
        await databases.deleteDocument(databaseId, collectionId, id);
        setLeads(leads.filter(l => l.$id !== id));
      } else {
        setLeads(leads.filter(l => l.$id !== id));
      }
    } catch (err) {
      console.error('Error deleting lead:', err);
    }
  };

  const openModal = (lead: Lead) => {
    setSelectedLead(lead);
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
          <Link to="/admin" className="flex items-center gap-4 bg-primary/10 text-primary p-4 rounded-2xl font-bold">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/leads" className="flex items-center gap-4 text-gray-400 p-4 rounded-2xl hover:bg-white/5 transition-colors">
            <Users size={20} /> Leads
          </Link>
          <Link to="/admin/settings" className="flex items-center gap-4 text-gray-400 p-4 rounded-2xl hover:bg-white/5 transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <button onClick={handleLogout} className="flex items-center gap-4 text-red-400 p-4 rounded-2xl hover:bg-red-400/10 transition-colors mt-auto">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-ink mb-2">Dashboard Overview</h1>
            <p className="text-muted text-sm">Welcome back, {user?.name || 'Admin'}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input type="text" placeholder="Search leads..." className="bg-white border-none rounded-xl pl-12 pr-6 py-3 shadow-sm focus:ring-2 focus:ring-primary w-64" />
            </div>
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
              <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
                <TrendingUp size={12} /> +12%
              </span>
            </div>
            <p className="text-muted text-sm font-bold uppercase tracking-widest mb-2">Total Leads</p>
            <h3 className="text-4xl font-bold text-ink">{leads.length}</h3>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                <CheckCircle size={24} />
              </div>
              <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
                <TrendingUp size={12} /> +5%
              </span>
            </div>
            <p className="text-muted text-sm font-bold uppercase tracking-widest mb-2">Processed</p>
            <h3 className="text-4xl font-bold text-ink">42</h3>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-ink/5 p-4 rounded-2xl text-ink">
                <Globe size={24} />
              </div>
              <span className="text-red-500 text-xs font-bold bg-red-50 px-2 py-1 rounded-lg flex items-center gap-1">
                -2%
              </span>
            </div>
            <p className="text-muted text-sm font-bold uppercase tracking-widest mb-2">Countries</p>
            <h3 className="text-4xl font-bold text-ink">8</h3>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-ink">Recent Leads</h3>
            <button onClick={fetchLeads} className="text-primary font-bold text-sm hover:underline">Refresh</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral text-muted text-xs font-bold uppercase tracking-widest">
                  <th className="px-8 py-4">Name</th>
                  <th className="px-8 py-4">Email</th>
                  <th className="px-8 py-4">Country</th>
                  <th className="px-8 py-4">Date</th>
                  <th className="px-8 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center text-muted">Loading leads...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center text-muted">No leads found.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.$id} className="hover:bg-neutral/50 transition-colors group">
                      <td className="px-8 py-6 font-bold text-ink">{lead.fullName}</td>
                      <td className="px-8 py-6 text-muted">{lead.email}</td>
                      <td className="px-8 py-6">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">
                          {lead.preferredCountry}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-muted text-sm">
                        {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <button onClick={() => openModal(lead)} className="p-2 text-muted hover:text-primary transition-colors">
                            <Eye size={18} />
                          </button>
                          <button onClick={() => handleDelete(lead.$id!)} className="p-2 text-muted hover:text-red-500 transition-colors">
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

      {/* Lead Details Modal */}
      {isModalOpen && selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="p-10 border-b border-gray-100 flex justify-between items-center bg-neutral">
              <h3 className="text-2xl font-bold text-ink">Lead Details</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-muted hover:text-ink transition-colors">
                <LogOut size={24} className="rotate-180" />
              </button>
            </div>
            
            <div className="p-10 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Full Name</p>
                  <p className="text-lg font-bold text-ink">{selectedLead.fullName}</p>
                </div>
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-lg font-bold text-ink">{selectedLead.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Phone Number</p>
                  <p className="text-lg font-bold text-ink">{selectedLead.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Preferred Country</p>
                  <p className="text-lg font-bold text-ink">{selectedLead.preferredCountry}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Course of Interest</p>
                  <p className="text-lg font-bold text-ink">{selectedLead.courseOfInterest}</p>
                </div>
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Education Level</p>
                  <p className="text-lg font-bold text-ink">{selectedLead.educationLevel}</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Message</p>
                <p className="text-ink leading-relaxed bg-neutral p-6 rounded-2xl">{selectedLead.message || 'No message provided.'}</p>
              </div>
            </div>
            
            <div className="p-10 bg-neutral flex justify-end gap-4">
              <button onClick={() => setIsModalOpen(false)} className="btn-outline py-2">Close</button>
              <button className="btn-primary py-2">Mark as Processed</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
