import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getReadingTime = (mins) => {
    if (!mins) return "";
    
    if (mins < 30) {
      // For less than 30 minutes, display coffee cups (1 per 5 minutes, rounded up)
      const cups = Math.ceil(mins / 5);
      return `${"☕️".repeat(cups)} ${mins} min read`;
    } else {
      // For 30+ minutes, display bento boxes (1 per 10 minutes, rounded up)
      const boxes = Math.ceil(mins / 10);
      return `${"🍱".repeat(boxes)} ${mins} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes && <small> · {getReadingTime(minutes)}</small>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
