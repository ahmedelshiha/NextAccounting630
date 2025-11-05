'use client'

import { memo } from 'react'
import type { WorkstationSidebarProps } from '../../types/workstation'

export const WorkstationSidebar = memo(function WorkstationSidebar({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
  stats,
  onAddUser,
  onReset,
}: WorkstationSidebarProps) {
  return (
    <div className="workstation-sidebar-content">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Quick Stats</h3>
        {/* QuickStatsCard will be integrated here */}
        <div className="sidebar-placeholder">Quick Stats Component</div>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Saved Views</h3>
        {/* SavedViewsButtons will be integrated here */}
        <div className="sidebar-placeholder">Saved Views Component</div>
      </div>

      <div className="sidebar-section flex-1 overflow-y-auto">
        <h3 className="sidebar-title">Filters</h3>
        {/* AdvancedUserFilters will be integrated here */}
        <div className="sidebar-placeholder">Filters Component</div>
      </div>

      <div className="sidebar-footer">
        <button
          className="btn-secondary w-full"
          onClick={onReset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
})
