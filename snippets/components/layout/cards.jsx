// card layouts

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
