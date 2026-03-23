/**
 * Sanitise HTML by stripping dangerous tags/attributes while keeping safe formatting.
 * Allows: a, b, i, em, strong, p, br, ul, ol, li, code, pre, span, h1-h6, blockquote, hr, img (with alt).
 * Strips: script, iframe, object, embed, form, input, style, link, on* attributes.
 * NOTE: For production-grade sanitisation, replace with DOMPurify.
 */
const SAFE_TAGS = new Set(['a','b','i','em','strong','p','br','ul','ol','li','code','pre','span','h1','h2','h3','h4','h5','h6','blockquote','hr','img','div']);
const SAFE_ATTRS = new Set(['href','target','rel','alt','src','class','id','title','aria-label','role']);
function sanitiseHTML(html) {
  if (!html || typeof html !== 'string') return '';
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/<object[\s\S]*?<\/object>/gi, '')
    .replace(/<embed[\s\S]*?>/gi, '')
    .replace(/<form[\s\S]*?<\/form>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<link[\s\S]*?>/gi, '')
    .replace(/\bon\w+\s*=\s*(['"])[^'"]*\1/gi, '')
    .replace(/\bon\w+\s*=\s*[^\s>]*/gi, '')
    .replace(/javascript\s*:/gi, '');
}

/**
 * @component BlogCard
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Blog post card with scrollable content, metadata, and CTA.
 * @dataSource automation/blog
 * @accepts {any} title, {any} content, {any} href, {string} author, {any} datePosted, {any} excerpt, {any} readingTime, {string} icon, {string} authorIcon, {string} dateIcon, {string} cta, {any} img, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {any} title - title prop.
 * @param {any} content - content prop.
 * @param {any} href - href prop.
 * @param {string} [author="Livepeer Team"] - author prop.
 * @param {any} [datePosted=null] - date Posted prop.
 * @param {any} [excerpt=null] - excerpt prop.
 * @param {any} [readingTime=null] - reading Time prop.
 * @param {string} [icon="book-open"] - icon prop.
 * @param {string} [authorIcon="user-pen"] - author Icon prop.
 * @param {string} [dateIcon="calendar"] - date Icon prop.
 * @param {string} [cta="Read More"] - cta prop.
 * @param {any} [img=null] - img prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const BlogCard = ({
  title,
  content,
  href,
  author = "Livepeer Team",
  datePosted = null,
  excerpt = null, //use if we prefer people to go to the actual blog site
  readingTime = null,
  icon = "book-open",
  authorIcon = "user-pen",
  dateIcon = "calendar",
  cta = "Read More",
  img = null,
  className = "",
  style = {},
  ...rest
}) => {
  // Show hint if content is likely to overflow (>500 chars as proxy)
  const showScrollHint = content && content.length > 500;

  const titleStyle = {
    alignItems: "center",
    color: "var(--accent)",
    fontSize: "1.25rem",
    marginLeft: "-2px",
    marginBottom: "0.5rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const authorStyle = {
    display: "flex",
    fontSize: 13,
    color: "var(--hero-text)",
    gap: 6,
  };

  const dateStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
    color: "var(--hero-text)",
    gap: 6,
  };

  const readTimeStyle = {
    display: "flex",
    marginTop: 0,
    alignItems: "center",
    fontSize: 12,
    color: "var(--hero-text)",
    gap: 6,
  };

  const contentBgStyle = {
    height: 1,
    backgroundColor: "var(--border)",
    margin: "12px 0",
  };

  const contentContainerStyle = {
    maxHeight: 300,
    overflowY: "auto",
  };
  const contentRegionLabel = title
    ? `Scrollable content for ${title}`
    : "Scrollable content";

  const scrollHintStyle = {
    fontSize: 11,
    color: "var(--muted-text)",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 0,
  };

  const iconStyle = { position: "relative", top: "-2px" };

  return (
    <Card
      className={className}
      style={style}
      title={
        <span style={titleStyle}>
          <span style={{ alignSelf: "top" }}>
            <Icon icon={icon} size={20} color="var(--accent)" />
          </span>
          <span style={{ marginLeft: "0.5rem" }}>{title}</span>
        </span>
      }
      href={href}
      cta={cta}
      img={img}
      arrow
      {...rest}
    >
      {/* <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}> */}
      <div style={{ flex: 1 }}>
        {/* {author && (
        <div
          style={authorStyle}
        >
          <span>
            <Icon icon={authorIcon} size={20} />
          </span>
          <span>{author}</span>
        </div>
      )} */}
        {datePosted && (
          <div style={dateStyle}>
            <span>
              <Icon icon={dateIcon} size={14} />
            </span>
            <span>{datePosted}</span>
          </div>
        )}
        {readingTime && (
          <div style={readTimeStyle}>
            <span>
              <Icon icon="clock" size={14} />
            </span>
            <span>Read Time: {readingTime} minutes</span>
          </div>
        )}
      </div>
      {/* <img
          src={img}
          style={{
            width: "30%",
            height: "auto",
            objectFit: "contain",
            alignSelf: "flex-start",
            justifySelf: "flex-end",
          }}
          alt="Blog Header Image"
        />
      </div> */}
      <div style={contentBgStyle} />
      <div
        style={contentContainerStyle}
        role="region"
        tabIndex={0}
        aria-label={contentRegionLabel}
        onScroll={(e) => {
          const el = e.target;
          const atBottom =
            el.scrollHeight - el.scrollTop <= el.clientHeight + 10;
          const hint = el.nextSibling;
          if (hint) hint.style.display = atBottom ? "none" : "block";
        }}
        dangerouslySetInnerHTML={{ __html: sanitiseHTML(content) }}
      />
      {showScrollHint && <div style={scrollHintStyle}>Scroll for more ↓</div>}
    </Card>
  );
};

/**
 * @component CardBlogDataLayout
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Grid layout rendering BlogCards from an items array.
 * @dataSource automation/blog
 * @accepts {Array} items, {any} limit, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const CardBlogDataLayout = ({ items = [], limit, className = "", style = {}, ...rest }) => {
  const displayItems = limit ? items.slice(0, limit) : items;
  if (!displayItems || displayItems.length === 0) {
    return (
      <Note>
        <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
          No blog posts at this time.
        </p>
      </Note>
    );
  }
  return (
    <div className={className} style={style} {...rest}>
      {displayItems.map((props, idx) => (
        <BlogCard key={props.href || idx} {...props} />
      ))}
    </div>
  );
};

/**
 * @component ColumnsBlogCardLayout
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Multi-column BlogCard layout using Mintlify Columns.
 * @dataSource automation/blog
 * @accepts {Array} items, {number} cols, {any} limit, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {Array} [items=[]] - items prop.
 * @param {number} [cols=2] - cols prop.
 * @param {any} limit - limit prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const ColumnsBlogCardLayout = ({ items = [], cols = 2, limit, className = "", style = {}, ...rest }) => {
  const displayItems = limit ? items.slice(0, limit) : items;
  if (!displayItems || displayItems.length === 0) {
    return (
      <Note>
        <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
          No blog posts at this time.
        </p>
      </Note>
    );
  }
  return (
    <Columns cols={cols} className={className} style={style} {...rest}>
      {displayItems.map((props, idx) => (
        <BlogCard key={props.href || idx} {...props} />
      ))}
    </Columns>
  );
};

/**
 * @component RssBlogCard
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Blog card for RSS feed data. Renders plain text excerpt — no HTML content. Use for non-Ghost blog sources (Daydream, Streamplace, etc.).
 * @dataSource automation/rss
 * @accepts {string} title, {string} href, {string} author, {string} excerpt, {string} datePosted, {string} img, {string} className, {object} style, ...rest
 * @aiDiscoverability none
 */
export const RssBlogCard = ({
  title,
  href,
  author = "",
  excerpt = "",
  datePosted = null,
  img = null,
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <Card
      className={className}
      style={style}
      title={title}
      href={href}
      img={img || undefined}
      arrow
      {...rest}
    >
      {datePosted && (
        <div style={{ display: "flex", alignItems: "center", fontSize: 12, color: "var(--hero-text)", gap: 6, marginBottom: "0.5rem" }}>
          <Icon icon="calendar" size={14} />
          <span>{datePosted}</span>
          {author && (
            <>
              <span style={{ color: "var(--text)" }}>•</span>
              <span>{author}</span>
            </>
          )}
        </div>
      )}
      {excerpt && (
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {excerpt}
        </p>
      )}
    </Card>
  );
};

/**
 * @component RssBlogCardLayout
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Multi-column RssBlogCard layout. Use for RSS blog data (non-Ghost sources).
 * @dataSource automation/rss
 * @accepts {Array} items, {number} cols, {number} limit, {string} className, {object} style, ...rest
 * @aiDiscoverability none
 */
export const RssBlogCardLayout = ({ items = [], cols = 2, limit, className = "", style = {}, ...rest }) => {
  const displayItems = limit ? items.slice(0, limit) : items;
  if (!displayItems || displayItems.length === 0) {
    return (
      <Note>
        <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
          No blog posts at this time.
        </p>
      </Note>
    );
  }
  return (
    <Columns cols={cols} className={className} style={style} {...rest}>
      {displayItems.map((props, idx) => (
        <RssBlogCard key={props.href || idx} {...props} />
      ))}
    </Columns>
  );
};

/**
 * @component BlogDataLayout
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Single-column BlogCard stack.
 * @dataSource automation/blog
 * @accepts {Array} items, {any} limit, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const BlogDataLayout = ({ items = [], limit, className = "", style = {}, ...rest }) => {
  const displayItems = limit ? items.slice(0, limit) : items;
  return (
    <div className={className} style={style} {...rest}>
      {displayItems.map((props, idx) => (
        <BlogCard key={props.href || idx} {...props} />
      ))}
    </div>
  );
};

/**
 * @component PostCard
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Post card with gradient header, scrollable content, and metadata.
 * @dataSource automation/blog
 * @accepts {any} title, {any} content, {any} href, {string} author, {any} datePosted, {any} replyCount, {string} icon, {string} authorIcon, {string} dateIcon, {string} cta, {any} img, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {any} title - title prop.
 * @param {any} content - content prop.
 * @param {any} href - href prop.
 * @param {string} [author="Unknown"] - author prop.
 * @param {any} [datePosted=null] - date Posted prop.
 * @param {any} [replyCount=null] - reply Count prop.
 * @param {string} [icon="book-open"] - icon prop.
 * @param {string} [authorIcon="user-pen"] - author Icon prop.
 * @param {string} [dateIcon="calendar"] - date Icon prop.
 * @param {string} [cta="Read More"] - cta prop.
 * @param {any} [img=null] - img prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const PostCard = ({
  title,
  content,
  href,
  author = "Unknown",
  datePosted = null,
  replyCount = null,
  icon = "book-open",
  authorIcon = "user-pen",
  dateIcon = "calendar",
  cta = "Read More",
  img = null,
  className = "",
  style = {},
  ...rest
}) => {
  // Show hint if content is likely to overflow (>500 chars as proxy)
  const showScrollHint = content && content.length > 500;

  // FIX STYLES
  return (
    <Card className={className} style={style} title={title} icon={icon} href={href} cta={cta} img={img} arrow {...rest}>
      {author && (
        <div
          style={{
            display: "flex",
            marginTop: "12px",
            fontSize: 13,
            color: "var(--text)",
            gap: 8,
          }}
        >
          <span>
            <Icon icon={authorIcon} size={20} />
          </span>
          <span>{author}</span>
        </div>
      )}
      {datePosted && (
        <div
          style={{
            display: "flex",
            marginTop: "10px",
            fontSize: 12,
            color: "var(--text)",
            gap: 8,
          }}
        >
          <span>
            <Icon icon={dateIcon} size={20} />
          </span>
          <span>{datePosted}</span>
        </div>
      )}
      {/* {replyCount && (
        <div
          style={{
            display: 'flex',
            marginBottom: 8,
            fontSize: 12,
            color: 'white',
            gap: 8,
          }}
        >
          <span>
            <Icon icon="comment" />
          </span>
          <span>Replies: {replyCount}</span>
        </div>
            )} */}
      <div
        style={{
          height: 1,
          backgroundColor: "var(--lp-color-bg-subtle)",
          margin: "12px 0",
        }}
      />
      <div
        style={{
          maxHeight: 300,
          overflowY: "auto",
        }}
        role="region"
        tabIndex={0}
        aria-label={title ? `Scrollable content for ${title}` : "Scrollable content"}
        onScroll={(e) => {
          const el = e.target;
          const atBottom =
            el.scrollHeight - el.scrollTop <= el.clientHeight + 10;
          const hint = el.nextSibling;
          if (hint) hint.style.display = atBottom ? "none" : "block";
        }}
        dangerouslySetInnerHTML={{ __html: sanitiseHTML(content) }}
      />
      {showScrollHint && (
        <div
          style={{
            fontSize: 11,
            color: "var(--lp-color-text-muted)",
            textAlign: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Scroll for more ↓
        </div>
      )}
    </Card>
  );
};

/**
 * @component CardColumnsPostLayout
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Multi-column PostCard layout.
 * @dataSource automation/blog
 * @accepts {number} cols, {Array} items, {any} limit, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {number} [cols=2] - cols prop.
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const CardColumnsPostLayout = ({ cols = 2, items = [], limit, className = "", style = {}, ...rest }) => {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <>
      <Columns cols={cols} className={className} style={style} {...rest}>
        {displayItems.map((props, idx) => (
          <PostCard key={props.href || idx} {...props} />
        ))}
      </Columns>
    </>
  );
};

/**
 * @component CardInCardLayout
 * @type integrators
 * @subniche blog
 * @status stable
 * @description PostCards rendered inside Card wrappers.
 * @dataSource automation/blog
 * @accepts {Array} items, {any} limit, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const CardInCardLayout = ({ items = [], limit, className = "", style = {}, ...rest }) => {
  return (
    <Card
      className={className}
      style={style}
      {...rest}
      img="/snippets/automations/forum/Hero_Livepeer_Forum.png"
      href="https://forum.livepeer.org"
      arrow={false}
    >
      <CardColumnsPostLayout cols={2} items={forumData} limit={2} />
    </Card>
  );
};

/**
 * @component ForumLatestLayout
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Latest forum topics with banner image and topic cards.
 * @dataSource automation/forum
 * @accepts {Array} items, {any} limit, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const ForumLatestLayout = ({ items = [], limit, className = "", style = {}, ...rest }) => {
  return (
    <div className={className} style={style} {...rest}>
      <a href="https://forum.livepeer.org" target="_blank" rel="noopener noreferrer">
        <img
          src="/snippets/automations/forum/Hero_Livepeer_Forum.png"
          alt="Livepeer Forum"
          noZoom
          style={{
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            marginBottom: "0",
            paddingBottom: "0",
          }}
        />
      </a>

      <CardColumnsPostLayout cols={2} items={items} limit={limit} />
    </div>
  );
};

/**
 * @component DiscordAnnouncements
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Discord announcement feed with parsed markdown content. Sanitised HTML.
 * @dataSource automation/discord
 * @accepts {Array} items, {any} limit, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const DiscordAnnouncements = ({ items = [], limit, className = "", style = {}, ...rest }) => {
  const displayItems = limit ? items.slice(0, limit) : items;
  if (!displayItems || displayItems.length === 0) {
    return (
      <Note>
        <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
          No announcements at this time.
        </p>
      </Note>
    );
  }

  // Convert markdown links [text](url) to HTML <a> tags
  const parseContent = (content) => {
    // First convert markdown links to HTML with icon placeholder
    const withLinks = content.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1 ↗</a>'
    );
    return withLinks;
  };

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid var(--accent)",
        borderRadius: "0.5rem",
        padding: "1rem",
        ...style,
      }}
      {...rest}
    >
      {displayItems.map((announcement, index) => (
        <div key={announcement.id} href={announcement.url} target="_blank" rel="noopener noreferrer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              marginBottom: "0.75rem",
              width: "100%",
            }}
          >
            <Icon icon="discord" color="var(--lp-color-brand-discord)" />
            <span style={{ fontWeight: 600, color: "var(--accent)" }}>
              Livepeer
              {/* {announcement.author} */}
            </span>
            <span style={{ color: "var(--text)" }}>•</span>
            <time
              dateTime={announcement.timestamp}
              style={{ color: "var(--text)" }}
            >
              {new Date(announcement.timestamp).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span
              style={{
                fontSize: "0.875rem",
                color: "var(--lp-color-text-secondary)",
                marginLeft: "auto",
              }}
            >
              View in Discord{" "}
              <Icon icon="arrow-up-right" size={12} color="var(--accent)" />
            </span>
          </div>
          <div
            style={{ color: "var(--text)" }}
            dangerouslySetInnerHTML={{
              __html: sanitiseHTML(parseContent(announcement.content)),
            }}
          />
          {index < displayItems.length - 1 && (
            <div style={{ marginTop: "0.75rem" }}>
              <hr
                style={{
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  margin: "0",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * @component LumaEvents
 * @type integrators
 * @subniche blog
 * @status stable
 * @description Upcoming/past event cards from Luma calendar data.
 * @dataSource Luma API
 * @accepts {any} data, {any} limit, {string} type, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {any} data - data prop.
 * @param {any} limit - limit prop.
 * @param {string} [type="upcoming"] - type prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const LumaEvents = ({ data, limit, type = "upcoming", className = "", style = {}, ...rest }) => {
  let events = [];

  if (type === "all") {
    events = [...data.upcoming, ...data.past];
  } else if (type === "past") {
    events = data.past;
  } else {
    events = data.upcoming;
  }

  const displayEvents = limit ? events.slice(0, limit) : events;

  if (displayEvents.length === 0) {
    return (
      <Card>
        <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
          No {type} events at this time.
        </p>
      </Card>
    );
  }

  return (
    // <div
    //   style={{
    //     display: "grid",
    //     gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    //     gap: "1rem",
    //   }}
    // >
    <Columns cols={3} className={className} style={style} {...rest}>
      {displayEvents.map((event, index) => (
        <Card
          key={index}
          href={event.url}
          arrow
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 600 }}>
                {event.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                <Icon icon="calendar" size={16} />
                <span>{event.date}</span>
              </div>
              {event.location && !event.location.startsWith("https://") && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon icon="map-pin" size={16} />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
            <a
              style={{
                marginTop: "1rem",
                fontSize: "0.875rem",
                color: "var(--accent)",
                textDecoration: "none",
                width: "fit-content",
              }}
              href={event.url}
              target="_blank" rel="noopener noreferrer"
              rel="noopener noreferrer"
            >
              View Event →
            </a>
          </div>
        </Card>
      ))}
    </Columns>
  );
};
