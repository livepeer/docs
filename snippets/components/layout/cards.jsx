/**
 * PostCard - A card component for displaying forum posts or articles
 *
 * @description
 * Displays a post with title, content, author, date, and optional metadata.
 * Includes automatic scroll detection and hints for long content.
 *
 * @param {string} title - The title of the post
 * @param {string} content - HTML content to display (rendered with dangerouslySetInnerHTML)
 * @param {string} href - Link URL for the card
 * @param {string} [author="Unknown"] - Author name
 * @param {string} [datePosted=null] - Date the post was published
 * @param {number} [replyCount=null] - Number of replies (currently unused)
 * @param {string} [icon="book-open"] - Icon to display on the card
 * @param {string} [authorIcon="user-pen"] - Icon for the author section
 * @param {string} [dateIcon="calendar"] - Icon for the date section
 * @param {string} [cta="Read More"] - Call-to-action button text
 * @param {string} [img=null] - Optional image URL for the card
 *
 * @example
 * <PostCard
 *   title="Getting Started with Livepeer"
 *   content="<p>Learn how to use Livepeer...</p>"
 *   href="/guides/getting-started"
 *   author="John Doe"
 *   datePosted="2024-01-15"
 * />
 *
 * @author Livepeer Documentation Team
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
  console.log("item", title, content, href, img);
  // Show hint if content is likely to overflow (>500 chars as proxy)
  const showScrollHint = content && content.length > 500;

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
          backgroundColor: "rgba(255,255,255,0.1)",
          margin: "12px 0",
        }}
      />
      <div
        style={{
          maxHeight: 300,
          overflowY: "auto",
        }}
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
            color: "rgba(255,255,255,0.5)",
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
 * CardColumnsPostLayout - Layout component for displaying multiple PostCards in columns
 *
 * @description
 * Renders an array of post items in a multi-column layout using the Columns component.
 * Each item is rendered as a PostCard.
 *
 * @param {number} [cols=2] - Number of columns to display
 * @param {Array<Object>} [items=[]] - Array of PostCard props objects
 *
 * @example
 * const posts = [
 *   { title: "Post 1", content: "...", href: "/post-1" },
 *   { title: "Post 2", content: "...", href: "/post-2" }
 * ];
 * <CardColumnsPostLayout cols={3} items={posts} />
 *
 * @author Livepeer Documentation Team
 */
export const CardColumnsPostLayout = ({ cols = 2, items = [] }) => {
  console.log("items", items);
  return (
    <Columns cols={cols}>
      {items.map((props, idx) => (
        <PostCard key={props.href || idx} {...props} />
      ))}
    </Columns>
  );
};

/**
 * BlogCard - A card component specifically designed for blog posts
 *
 * @description
 * Similar to PostCard but optimized for blog content with reading time and excerpt support.
 * Includes automatic scroll detection for long content.
 *
 * @param {string} title - The title of the blog post
 * @param {string} content - HTML content to display
 * @param {string} href - Link URL for the blog post
 * @param {string} [author="Livepeer Team"] - Author name
 * @param {string} [datePosted=null] - Publication date
 * @param {string} [excerpt=null] - Short excerpt (use if linking to external blog)
 * @param {number} [readingTime=null] - Estimated reading time in minutes
 * @param {string} [icon="book-open"] - Icon for the card
 * @param {string} [authorIcon="user-pen"] - Icon for author section (currently commented out)
 * @param {string} [dateIcon="calendar"] - Icon for date section
 * @param {string} [cta="Read More"] - Call-to-action button text
 * @param {string} [img=null] - Optional image URL
 *
 * @example
 * <BlogCard
 *   title="Livepeer 2024 Roadmap"
 *   content="<p>Exciting updates coming...</p>"
 *   href="/blog/2024-roadmap"
 *   datePosted="2024-01-15"
 *   readingTime={5}
 * />
 *
 * @author Livepeer Documentation Team
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
  console.log("item", title, content, href, img);
  // Show hint if content is likely to overflow (>500 chars as proxy)
  const showScrollHint = content && content.length > 500;

  return (
    <Card title={title} icon={icon} href={href} cta={cta} img={img} arrow>
      {/* {author && (
        <div
          style={{
            display: 'flex',
            marginTop: '12px',
            fontSize: 13,
            color: 'white',
            gap: 8,
          }}
        >
          <span>
            <Icon icon={authorIcon} size={20} />
          </span>
          <span>{author}</span>
        </div>
      )} */}
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
      {readingTime && (
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
            <Icon icon="clock" size={20} />
          </span>
          <span>Read Time: {readingTime} minutes</span>
        </div>
      )}
      <div
        style={{
          height: 1,
          backgroundColor: "rgba(255,255,255,0.1)",
          margin: "12px 0",
        }}
      />
      <div
        style={{
          maxHeight: 300,
          overflowY: "auto",
        }}
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
            color: "rgba(255,255,255,0.5)",
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
 * CardBlogDataLayout - Layout component for displaying multiple BlogCards
 *
 * @description
 * Renders an array of blog items as BlogCard components in a vertical layout.
 *
 * @param {Array<Object>} [items=[]] - Array of BlogCard props objects
 *
 * @example
 * const blogPosts = [
 *   { title: "Blog 1", content: "...", href: "/blog/post-1", readingTime: 5 },
 *   { title: "Blog 2", content: "...", href: "/blog/post-2", readingTime: 3 }
 * ];
 * <CardBlogDataLayout items={blogPosts} />
 *
 * @author Livepeer Documentation Team
 */
export const CardBlogDataLayout = ({ items = [] }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((props, idx) => (
        <BlogCard key={props.href || idx} {...props} />
      ))}
    </div>
  );
};
