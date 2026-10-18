import React from 'react';

interface BrandIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function BrandIcon({ name, className = 'w-4 h-4', size }: BrandIconProps) {
  const norm = name.toLowerCase().trim();
  const style = size ? { width: size, height: size } : undefined;

  // Google Workspace / Gmail / Drive / Sheets
  if (norm.includes('google') || norm.includes('workspace') || norm.includes('drive')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Google Workspace">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
      </svg>
    );
  }

  // Google Sheets / Spreadsheets / Excel
  if (norm.includes('sheet') || norm.includes('excel')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Sheets & Excel">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41" />
        <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" fill="#FFFFFF" />
        <path d="M17 15l-3 4h2l2-2.7 2 2.7h2l-3-4 3-4h-2l-2 2.7-2-2.7h-2l3 4z" fill="#FFFFFF" opacity="0.9" />
      </svg>
    );
  }

  // Notion
  if (norm.includes('notion')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="Notion">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.458-.84c1.12-.093 1.307.373 1.12 1.213l-1.96 12.873c-.187 1.213-.747 1.773-2.054 1.866l-11.83.84c-1.214.093-1.68-.467-1.494-1.68l1.96-12.874c.187-1.213.653-1.866 1.96-1.866.467 0 .84.093 1.412.002zm2.894 3.08v9.704c0 .56.28.747.747.747.373 0 .746-.187 1.12-.467l6.812-5.04v5.32c0 .467.28.747.747.747.466 0 .746-.28.746-.747V7.848c0-.467-.28-.747-.746-.747-.374 0-.747.187-1.12.467L8.847 12.6V7.288c0-.467-.28-.747-.747-.747-.467 0-.747.28-.747.747z" />
      </svg>
    );
  }

  // Asana
  if (norm.includes('asana')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Asana">
        <circle cx="12" cy="6.5" r="4" fill="#F06A6A" />
        <circle cx="6.5" cy="16" r="4" fill="#F06A6A" />
        <circle cx="17.5" cy="16" r="4" fill="#F06A6A" />
      </svg>
    );
  }

  // Slack
  if (norm.includes('slack')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Slack">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.528 2.528 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A" />
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0" />
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D" />
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E" />
      </svg>
    );
  }

  // Shopify
  if (norm.includes('shopify')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Shopify">
        <path d="M19.98 6.13a.92.92 0 0 0-.82-.57l-3.32-.34-2.22-3.23a.96.96 0 0 0-1.57 0L9.83 5.22l-3.32.34a.92.92 0 0 0-.82.57c-.12.28-.08.6.1.84l2.48 3.37-1.1 9.94a.92.92 0 0 0 .58.96.94.94 0 0 0 .38.08.91.91 0 0 0 .5-.15L12 18.95l3.37 2.22c.16.1.34.15.5.15.13 0 .26-.03.38-.08a.92.92 0 0 0 .58-.96l-1.1-9.94 2.48-3.37a.89.89 0 0 0 .1-.84z" fill="#95BF47" />
        <path d="M12.5 8.5c-.83 0-1.5.67-1.5 1.5 0 1.25 1.75 1.5 1.75 2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75h-1c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-1.42-1.75-1.63-1.75-2.5 0-.28.22-.5.5-.5s.5.22.5.5h1c0-.97-.78-1.75-1.75-1.75z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Zendesk
  if (norm.includes('zendesk')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Zendesk">
        <circle cx="12" cy="12" r="10.5" fill="#03363D" />
        <path d="M7 8h6v2.5H7V8zm0 5.5h6V16H7v-2.5zm4-3h6V13h-6v-2.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Trello
  if (norm.includes('trello')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Trello">
        <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#0079BF" />
        <rect x="5.5" y="5.5" width="5.5" height="11" rx="1.5" fill="#FFFFFF" />
        <rect x="13" y="5.5" width="5.5" height="7" rx="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Canva
  if (norm.includes('canva')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Canva">
        <circle cx="12" cy="12" r="10.5" fill="#00C4CC" />
        <path d="M14.8 15.6c-.9.5-1.9.7-2.9.7-3.1 0-5.2-2-5.2-5.1 0-3.3 2.5-5.2 5.5-5.2 1 0 1.9.3 2.6.7l-.6 1.4c-.6-.4-1.3-.6-2-.6-2.2 0-3.7 1.4-3.7 3.7 0 2.2 1.4 3.6 3.6 3.6.7 0 1.4-.2 2-.5l.7 1.4z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Zoom
  if (norm.includes('zoom')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Zoom">
        <rect x="2" y="4" width="15" height="16" rx="3" fill="#2D8CFF" />
        <path d="M17 9.5l5-3.5v12l-5-3.5V9.5z" fill="#2D8CFF" />
        <rect x="5.5" y="7.5" width="8" height="9" rx="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Calendly / Calendar
  if (norm.includes('calendly') || norm.includes('calendar')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="Calendly / Calendar">
        <circle cx="12" cy="12" r="10" fill="#006BFF" />
        <path d="M12 6.5a5.5 5.5 0 1 0 5.2 7.3h-2.1a3.5 3.5 0 1 1-3.1-4.8c.8 0 1.6.3 2.2.8l1.4-1.4A5.4 5.4 0 0 0 12 6.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // HelpScout
  if (norm.includes('helpscout')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="HelpScout">
        <circle cx="12" cy="12" r="10.5" fill="#1276E8" />
        <path d="M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0zm3.5 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 1Password
  if (norm.includes('1password') || norm.includes('lastpass')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="1Password">
        <circle cx="12" cy="12" r="10.5" fill="#0A85EA" />
        <circle cx="12" cy="11.5" r="3.2" fill="#FFFFFF" />
        <rect x="11.2" y="12" width="1.6" height="4.5" rx="0.8" fill="#FFFFFF" />
      </svg>
    );
  }

  // WordPress
  if (norm.includes('wordpress')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-label="WordPress">
        <circle cx="12" cy="12" r="10.5" fill="#21759B" />
        <path d="M4 12c0 2.8 1.4 5.2 3.6 6.7L4.3 9.8C4.1 10.5 4 11.2 4 12zm13.7-.7c0-1-.4-1.8-1-2.4-.7-.7-1.4-.9-2.3-.9-.1 0-.3 0-.4 0L12 14.5l2.4-7.1c.1-.4.2-.7.2-1 0-.6-.5-1-1.3-1H8.7c-.5 0-.8.3-.8.7 0 .3.2.6.5.6h.6l2 5.8-2 6c-.4 1.2-1 1.2-1.3 1.2h-.2c1.4.9 3 1.4 4.8 1.4 1.5 0 2.9-.4 4.1-1.2l-2.7-7.7zm2.4-1.5c.3.7.4 1.4.4 2.2 0 2.4-1.1 4.5-2.8 5.9l2.4-8.1z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Email / Inbox Zero
  if (norm.includes('email') || norm.includes('inbox')) {
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Inbox">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    );
  }

  // Fallback icon for workflows or general items
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
