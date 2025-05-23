'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, FileText, HelpCircle, MessageSquare, Edit2, X } from 'lucide-react';
import useSourceStore from '@/store/sourceStore';
import { toast } from 'react-hot-toast';

export default function SourcesPage() {
  const { sources, addSource, updateSource, deleteSource, toggleSourceStatus } = useSourceStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newSource, setNewSource] = useState({ title: '', type: 'Help Center' });

  const filteredSources = sources.filter(source =>
    source.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSource = () => {
    if (!newSource.title.trim()) {
      toast.error('Please enter a source title');
      return;
    }
    addSource(newSource);
    setNewSource({ title: '', type: 'Help Center' });
    setIsModalOpen(false);
    toast.success('Source added successfully');
  };

  const handleDeleteSource = (id) => {
    if (window.confirm('Are you sure you want to delete this source?')) {
      deleteSource(id);
      toast.success('Source deleted successfully');
    }
  };

  const handleToggleStatus = (id) => {
    toggleSourceStatus(id);
    toast.success('Source status updated');
  };

  return (
    <div className="p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Knowledge Sources</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={20} />
          Add Source
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Search sources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSources.map((source) => (
          <motion.div
            key={source.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-background rounded-lg shadow-sm border border-border p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {source.type === 'Help Center' && <FileText className="text-primary" size={24} />}
                {source.type === 'FAQ' && <HelpCircle className="text-green-500" size={24} />}
                {source.type === 'Conversations' && <MessageSquare className="text-purple-500" size={24} />}
                <div>
                  <h3 className="font-medium text-foreground">{source.title}</h3>
                  <p className="text-sm text-muted-foreground">{source.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleStatus(source.id)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    source.status === 'active' ? 'bg-green-500' : 'bg-muted'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-background transform transition-transform ${
                      source.status === 'active' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <button
                  onClick={() => handleDeleteSource(source.id)}
                  className="p-1 hover:bg-accent rounded"
                >
                  <X size={18} className="text-destructive" />
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Last updated: {source.lastUpdated}</span>
              <button
                onClick={() => {/* TODO: Implement edit functionality */}}
                className="flex items-center gap-1 text-primary hover:text-primary/90"
              >
                <Edit2 size={16} />
                Edit
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background rounded-lg p-6 w-full max-w-md border border-border"
          >
            <h2 className="text-xl font-semibold mb-4 text-foreground">Add New Source</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Source Name
                </label>
                <input
                  type="text"
                  value={newSource.title}
                  onChange={(e) => setNewSource({ ...newSource, title: e.target.value })}
                  className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter source name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Source Type
                </label>
                <select
                  value={newSource.type}
                  onChange={(e) => setNewSource({ ...newSource, type: e.target.value })}
                  className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Help Center">Help Center</option>
                  <option value="FAQ">FAQ</option>
                  <option value="Conversations">Conversations</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSource}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                Add Source
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
