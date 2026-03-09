/**
 * @component BlogCard
 * @category data
 * @tier composite
 * @status stable
 * @description Blog Card data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies CardBlogDataLayout, CardColumnsPostLayout, DiscordAnnouncements, LumaEvents, PostCard
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/blog
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
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
 * @example
 * <BlogCard title="example" content="example" />
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
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {showScrollHint && <div style={scrollHintStyle}>Scroll for more ↓</div>}
    </Card>
  );
};

/**
 * @component CardBlogDataLayout
 * @category data
 * @tier composite
 * @status stable
 * @description Card Blog Data Layout data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardColumnsPostLayout, DiscordAnnouncements, LumaEvents, PostCard
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/blog
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
 * @example
 * <CardBlogDataLayout limit={1} />
 */
export const CardBlogDataLayout = ({ items = [], limit }) => {
  console.debug("items", items);
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
    <div>
      {displayItems.map((props, idx) => (
        <BlogCard key={props.href || idx} {...props} />
      ))}
    </div>
  );
};

/**
 * @component ColumnsBlogCardLayout
 * @category data
 * @tier composite
 * @status stable
 * @description Columns Blog Card Layout data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardBlogDataLayout, CardColumnsPostLayout, DiscordAnnouncements, LumaEvents, PostCard
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/blog
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {Array} [items=[]] - items prop.
 * @param {number} [cols=2] - cols prop.
 * @param {any} limit - limit prop.
 * @example
 * <ColumnsBlogCardLayout limit={1} />
 */
export const ColumnsBlogCardLayout = ({ items = [], cols = 2, limit }) => {
  console.debug("items", items);
  const displayItems = limit ? items.slice(0, limit) : items;
  return (
    <Columns cols={cols}>
      {displayItems.map((props, idx) => (
        <BlogCard key={props.href || idx} {...props} />
      ))}
    </Columns>
  );
};

/**
 * @component BlogDataLayout
 * @category data
 * @tier composite
 * @status stable
 * @description Blog Data Layout data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardBlogDataLayout, CardColumnsPostLayout, DiscordAnnouncements, LumaEvents, PostCard
 * @usedIn none
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/blog
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
 * @example
 * <BlogDataLayout limit={1} />
 */
export const BlogDataLayout = ({ items = [], limit }) => {
  console.debug("blogdata items", items);
  const displayItems = limit ? items.slice(0, limit) : items;
  return (
    <div>
      {displayItems.map((props, idx) => (
        <BlogCard key={props.href || idx} {...props} />
      ))}
    </div>
  );
};

/**
 * @component PostCard
 * @category data
 * @tier composite
 * @status stable
 * @description Post Card data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardBlogDataLayout, CardColumnsPostLayout, DiscordAnnouncements, LumaEvents
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx, v2/x-experimental/trending-layout-tests.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/blog
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
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
 * @example
 * <PostCard title="example" content="example" />
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
}) => {
  console.debug("item", title, content, href, img);
  // Show hint if content is likely to overflow (>500 chars as proxy)
  const showScrollHint = content && content.length > 500;

  // FIX STYLES
  return (
    <Card title={title} icon={icon} href={href} cta={cta} img={img} arrow>
      {author && (
        <div
          style={{
            display: "flex",
            marginTop: "12px",
            fontSize: 13,
            color: "white",
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
            color: "white",
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
        dangerouslySetInnerHTML={{ __html: content }}
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
 * @category data
 * @tier composite
 * @status stable
 * @description Card Columns Post Layout data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardBlogDataLayout, DiscordAnnouncements, LumaEvents, PostCard
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx, v2/x-experimental/trending-layout-tests.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/blog
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {number} [cols=2] - cols prop.
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
 * @example
 * <CardColumnsPostLayout limit={1} />
 */
export const CardColumnsPostLayout = ({ cols = 2, items = [], limit }) => {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <>
      <Columns cols={cols}>
        {displayItems.map((props, idx) => (
          <PostCard key={props.href || idx} {...props} />
        ))}
      </Columns>
    </>
  );
};

/**
 * @component CardInCardLayout
 * @category data
 * @tier composite
 * @status stable
 * @description Card In Card Layout data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardBlogDataLayout, CardColumnsPostLayout, DiscordAnnouncements, LumaEvents, PostCard
 * @usedIn none
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
 * @example
 * <CardInCardLayout limit={1} />
 */
export const CardInCardLayout = ({ items = [], limit }) => {
  return (
    <Card
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
 * @category data
 * @tier composite
 * @status stable
 * @description Forum Latest Layout data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardBlogDataLayout, CardColumnsPostLayout, DiscordAnnouncements, LumaEvents, PostCard
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/livepeer-latest-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/forum
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
 * @example
 * <ForumLatestLayout limit={1} />
 */
export const ForumLatestLayout = ({ items = [], limit }) => {
  return (
    <>
      <a href="https:/forum.livepeer.org" target="_blank">
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
    </>
  );
};

/**
 * @component DiscordAnnouncements
 * @category data
 * @tier composite
 * @status stable
 * @description Discord Announcements data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardBlogDataLayout, CardColumnsPostLayout, LumaEvents, PostCard
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/discord
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
 * @example
 * <DiscordAnnouncements limit={1} />
 */
export const DiscordAnnouncements = ({ items = [], limit }) => {
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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid var(--accent)",
        borderRadius: "0.5rem",
        padding: "1rem",
      }}
    >
      {displayItems.map((announcement, index) => (
        <div key={announcement.id} href={announcement.url} target="_blank">
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
              __html: parseContent(announcement.content),
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
 * @category data
 * @tier composite
 * @status stable
 * @description Luma Events data-driven component for rendering automated or API-backed documentation content.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies BlogCard, CardBlogDataLayout, CardColumnsPostLayout, DiscordAnnouncements, PostCard
 * @usedIn v2/cn/community/livepeer-connect/events-and-community-streams.mdx, v2/community/livepeer-connect/events-and-community-streams.mdx, v2/es/community/livepeer-connect/events-and-community-streams.mdx, v2/fr/community/livepeer-connect/events-and-community-streams.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource automationData/luma
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} data - data prop.
 * @param {any} limit - limit prop.
 * @param {string} [type="upcoming"] - type prop.
 * @example
 * <LumaEvents data="example" limit={1} />
 */
export const LumaEvents = ({ data, limit, type = "upcoming" }) => {
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
    <Columns cols={3}>
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
              target="_blank"
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
