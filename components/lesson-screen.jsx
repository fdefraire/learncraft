// Distribution Craft — Lesson screen
// Walks through sections one at a time, ends with takeaways → quiz.

const { useState, useEffect, useRef } = React;
const { SectionView, Takeaways } = window.LessonContent;

function LessonScreen({ lesson, onBack, onStartQuiz, initialSection = 0, onSectionChange }) {
  const [idx, setIdx] = useState(initialSection);
  // Total stops: each section + one "takeaways" stop
  const total = lesson.sections.length + 1;
  const isTakeaways = idx === lesson.sections.length;
  const topRef = useRef(null);

  useEffect(() => {
    onSectionChange && onSectionChange(idx);
    // Scroll the app container to top on section change
    if (topRef.current) topRef.current.scrollIntoView({ block: 'start' });
  }, [idx]);

  const section = !isTakeaways ? lesson.sections[idx] : null;
  const progressPct = ((idx + 1) / total) * 100;

  return (
    <div className="lesson-screen page">
      <div ref={topRef} />
      <div className="back-bar">
        <button className="back-btn" onClick={onBack}>← Accueil</button>
        <div className="lesson-progress"><i style={{ width: `${progressPct}%` }} /></div>
        <div className="lesson-progress-meta">{idx + 1}/{total}</div>
      </div>

      {idx === 0 && (
        <header className="lesson-head">
          <div className="module">{lesson.module_label} · LEÇON {String(lesson.number).padStart(2, '0')}</div>
          <h1>{lesson.title}</h1>
          <p className="intro">{lesson.intro}</p>
        </header>
      )}

      {isTakeaways ? (
        <>
          <div className="section-eyebrow">
            <span className="num">§ Synthèse</span>
            <span className="of">— ce qui doit rester</span>
          </div>
          <h2 className="section-title">À retenir de cette leçon</h2>
          <Takeaways items={lesson.takeaways} />
        </>
      ) : (
        <>
          <div className="section-eyebrow">
            <span className="num">Section {String(idx + 1).padStart(2, '0')}</span>
            <span className="of">/ {lesson.sections.length}</span>
          </div>
          <h2 className="section-title">{section.title}</h2>
          <SectionView section={section} />
        </>
      )}

      <div className="section-nav">
        {!isTakeaways ? (
          <button className="btn btn-primary" onClick={() => setIdx(idx + 1)}>
            {idx + 1 === lesson.sections.length ? 'Voir la synthèse →' : 'Section suivante →'}
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onStartQuiz}>
            Passer au quiz →
          </button>
        )}
        {idx > 0 && (
          <button className="btn btn-ghost" onClick={() => setIdx(idx - 1)}>
            ← Section précédente
          </button>
        )}
      </div>
    </div>
  );
}

window.LessonScreen = LessonScreen;
