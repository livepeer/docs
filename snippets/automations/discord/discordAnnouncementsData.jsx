export const DiscordAnnouncements = () => {
  const announcements = [

  ];

  return (
    <div className="discord-announcements">
      <div className="announcements-header">
        <h3>Latest Livepeer Announcements</h3>
        <p className="text-sm text-gray-600">From Discord</p>
      </div>
      <div className="announcements-list space-y-4 mt-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement-card border rounded-lg p-4">
            <div className="announcement-meta flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span className="font-semibold">{announcement.author}</span>
              <span>•</span>
              <time dateTime={announcement.timestamp}>
                {new Date(announcement.timestamp).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            <div 
              className="announcement-content" 
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />
            <a 
              href={announcement.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-block"
            >
              View in Discord →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
