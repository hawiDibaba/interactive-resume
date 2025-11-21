export default function Header({ profile }) {
  return (
    <header className="header" aria-label="Profile header">
      <div className="title-row">
        <h1>{profile.name}</h1>
        {profile.title && <p className="subtitle">{profile.title}</p>}
      </div>

      <div className="locClearance" aria-label="Location and clearance">
        {profile.location && <div className="location">{profile.location}</div>}
        {profile.clearance && (
          <div className="clearance">{profile.clearance}</div>
        )}
      </div>

      <nav className="links" aria-label="Contact links">
        {profile.email && (
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        )}
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`LinkedIn profile of ${profile.name}`}
          >
            LinkedIn
          </a>
        )}
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`GitHub profile of ${profile.name}`}
          >
            GitHub
          </a>
        )}
      </nav>
    </header>
  );
}
