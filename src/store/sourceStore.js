import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSourceStore = create(
  persist(
    (set) => ({
      sources: [
        {
          id: 1,
          title: 'Help Center Articles',
          type: 'Help Center',
          status: 'active',
          lastUpdated: '2 hours ago',
        },
        {
          id: 2,
          title: 'FAQs',
          type: 'FAQ',
          status: 'active',
          lastUpdated: '1 hour ago',
        },
        {
          id: 3,
          title: 'Past Conversations',
          type: 'Conversations',
          status: 'active',
          lastUpdated: '30 minutes ago',
        },
      ],

      addSource: (source) =>
        set((state) => ({
          sources: [
            {
              id: Math.max(0, ...state.sources.map((s) => s.id)) + 1,
              ...source,
              status: 'active',
              lastUpdated: 'Just now',
            },
            ...state.sources,
          ],
        })),

      updateSource: (id, updates) =>
        set((state) => ({
          sources: state.sources.map((source) =>
            source.id === id ? { ...source, ...updates, lastUpdated: 'Just now' } : source
          ),
        })),

      deleteSource: (id) =>
        set((state) => ({
          sources: state.sources.filter((source) => source.id !== id),
        })),

      toggleSourceStatus: (id) =>
        set((state) => ({
          sources: state.sources.map((source) =>
            source.id === id
              ? {
                  ...source,
                  status: source.status === 'active' ? 'inactive' : 'active',
                  lastUpdated: 'Just now',
                }
              : source
          ),
        })),
    }),
    {
      name: 'source-storage', // unique name for localStorage key
      partialize: (state) => ({ sources: state.sources }), // only persist sources
    }
  )
);

export default useSourceStore; 