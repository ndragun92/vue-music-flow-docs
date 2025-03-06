import md from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";

export default defineNuxtPlugin(() => {
  // Initialize the Markdown-It renderer with syntax highlighting
  const renderer = md({
    html: true, // Enable embedded HTML in Markdown
    xhtmlOut: true, // Use '/' in self-closing tags
    breaks: true, // Convert line breaks in paragraphs into <br>
    linkify: true, // Turn plain URLs into clickable links
    typographer: true, // Enable smart quotes, dashes, etc.
    langPrefix: "test-",
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre><code class="hljs">' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            "</code></pre>"
          );
        } catch (_) {
          console.error(_);
        }
      }

      return (
        '<pre><code class="hljs">' + md.utils.escapeHtml(str) + "</code></pre>"
      );
    },
  });

  // Provide the renderer globally
  return {
    provide: {
      mdRenderer: renderer,
    },
  };
});
