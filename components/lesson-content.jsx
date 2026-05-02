// Distribution Craft — content rendering bits for a lesson
// Renders sections (terms[] OR blocks[])

const Box = ({ kind, label, children }) => (
  <div className={`box ${kind}`}>
    {label && <div className="box-label">{label}</div>}
    <p>{children}</p>
  </div>
);

const Term = ({ t }) => (
  <div className="term">
    <h3>{t.term}</h3>
    {t.sub && <div className="sub">— {t.sub}</div>}
    <p className="definition">{t.definition}</p>
    {t.piege && <Box kind="piege" label="§ Piège">{t.piege}</Box>}
    {t.exemple && <Box kind="exemple" label="Exemple">« {t.exemple} »</Box>}
    {t.signal && <Box kind="signal" label="Signal">{t.signal}</Box>}
  </div>
);

const Block = ({ b }) => {
  switch (b.type) {
    case 'lead':
      return <div className="box lead">{b.text}</div>;
    case 'h3':
      return <h3 className="block-h3">{b.text}</h3>;
    case 'card':
      return (
        <div className="block-card">
          {b.label && <div className="label">{b.label}</div>}
          {b.title && <h4>{b.title}</h4>}
          {b.body && <div className="body">{b.body}</div>}
          {b.note && <div className="note">{b.note}</div>}
        </div>
      );
    case 'list':
      return (
        <div className="block-list">
          {b.title && <div className="list-title">{b.title}</div>}
          <ul>{b.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
        </div>
      );
    case 'piege':
      return <Box kind="piege" label="§ Piège">{b.text}</Box>;
    case 'signal':
      return <Box kind="signal" label="Signal">{b.text}</Box>;
    case 'exemple':
      return <Box kind="exemple" label="Exemple">« {b.text} »</Box>;
    case 'table':
      return (
        <div className="block-table">
          <table>
            <thead><tr>{b.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
};

const SectionView = ({ section }) => (
  <div className="section">
    {section.kind === 'terms'
      ? section.terms.map((t, i) => <Term key={i} t={t} />)
      : section.blocks.map((b, i) => <Block key={i} b={b} />)}
  </div>
);

// Renders takeaways with **bold** parsing
const Takeaways = ({ items }) => (
  <div className="takeaways">
    <div className="eyebrow">À retenir</div>
    <ol>
      {items.map((t, i) => {
        // simple **bold** → <strong>
        const parts = t.split(/(\*\*[^*]+\*\*)/g);
        return (
          <li key={i}>
            {parts.map((p, j) =>
              p.startsWith('**') && p.endsWith('**')
                ? <strong key={j}>{p.slice(2, -2)}</strong>
                : <React.Fragment key={j}>{p}</React.Fragment>
            )}
          </li>
        );
      })}
    </ol>
  </div>
);

window.LessonContent = { SectionView, Takeaways };
