interface LessonPreviewProps {
  title: string;
  html: string;
  description?: string;
}

export default function LessonPreview({ title, html, description }: LessonPreviewProps) {
  return (
    <div className="my-6">
      <div className="mb-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
      <div className="border-2 border-blue-300 rounded-lg p-6 bg-white">
        <style dangerouslySetInnerHTML={{
          __html: `
            .preview-html-content h1 {
              font-size: 2em;
              font-weight: bold;
              margin: 0.67em 0;
            }
            .preview-html-content h2 {
              font-size: 1.5em;
              font-weight: bold;
              margin: 0.75em 0;
            }
            .preview-html-content h3 {
              font-size: 1.17em;
              font-weight: bold;
              margin: 0.83em 0;
            }
            .preview-html-content h4 {
              font-size: 1em;
              font-weight: bold;
              margin: 1.12em 0;
            }
            .preview-html-content h5 {
              font-size: 0.83em;
              font-weight: bold;
              margin: 1.5em 0;
            }
            .preview-html-content h6 {
              font-size: 0.67em;
              font-weight: bold;
              margin: 1.67em 0;
            }
            .preview-html-content p {
              margin: 1em 0;
            }
            .preview-html-content strong,
            .preview-html-content b {
              font-weight: bold;
            }
            .preview-html-content em,
            .preview-html-content i {
              font-style: italic;
            }
            .preview-html-content u {
              text-decoration: underline;
            }
            .preview-html-content mark {
              background-color: yellow;
              color: black;
            }
            .preview-html-content small {
              font-size: 0.8em;
            }
            .preview-html-content del,
            .preview-html-content s {
              text-decoration: line-through;
            }
            .preview-html-content hr {
              border: none;
              border-top: 1px solid #ccc;
              margin: 1em 0;
            }
          `
        }} />
        <div className="preview-html-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
