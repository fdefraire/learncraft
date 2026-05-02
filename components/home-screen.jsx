// Distribution Craft — Home screen

function HomeScreen({ lessons, progress, onOpen, justUnlockedId, cardStyle }) {
  const totalLessons = lessons.length;
  const completedLessons = lessons.filter(l => progress.lessons[l.id]?.completed).length;

  const completedScores = lessons
    .map(l => progress.lessons[l.id])
    .filter(p => p && p.completed && typeof p.score === 'number');
  const avgScore = completedScores.length
    ? (completedScores.reduce((s, p) => s + p.score, 0) / completedScores.length)
    : 0;
  const totalMin = lessons
    .filter(l => progress.lessons[l.id]?.completed)
    .reduce((s, l) => s + l.duration_min, 0);

  const isUnlocked = (l, i) => {
    if (i === 0) return true;
    const prev = lessons[i - 1];
    const prevState = progress.lessons[prev.id];
    return prevState && prevState.completed && prevState.score >= prev.quiz.passing;
  };

  return (
    <div className="page" data-card-style={cardStyle}>
      <header className="home-header">
        <div className="eyebrow">Masterclass · Module 1 — Fondamentaux</div>
        <h1>Distribution <em>Craft</em></h1>
        <p className="lede">Trois leçons pour tenir une conversation crédible avec un brasseur français sur le métier de la distribution.</p>
      </header>

      <div className="stats">
        <div className="stat">
          <div className="label">Leçons</div>
          <div className="value">{completedLessons}<span className="denom">/{totalLessons}</span></div>
          <div className="bar"><i style={{ width: `${(completedLessons / totalLessons) * 100}%` }}/></div>
        </div>
        <div className="stat">
          <div className="label">Score moyen</div>
          <div className="value">{completedScores.length ? avgScore.toFixed(1) : '—'}<span className="denom">{completedScores.length ? '/6' : ''}</span></div>
          <div className="bar"><i style={{ width: `${(avgScore / 6) * 100}%` }}/></div>
        </div>
        <div className="stat">
          <div className="label">Temps</div>
          <div className="value">{totalMin}<span className="denom"> min</span></div>
          <div className="bar"><i style={{ width: `${(totalMin / lessons.reduce((s,l)=>s+l.duration_min,0)) * 100}%` }}/></div>
        </div>
      </div>

      <div className="eyebrow muted" style={{ marginBottom: '1rem' }}>§ Le cursus</div>

      <div className="lessons-list">
        {lessons.map((l, i) => {
          const state = progress.lessons[l.id];
          const unlocked = isUnlocked(l, i);
          const completed = state?.completed;
          const cls = ['lesson-card',
            !unlocked && 'locked',
            completed && 'completed',
            justUnlockedId === l.id && 'just-unlocked'
          ].filter(Boolean).join(' ');

          return (
            <button
              key={l.id}
              className={cls}
              onClick={() => unlocked && onOpen(l)}
            >
              <div className="num">{String(l.number).padStart(2, '0')}</div>
              <div className="meta">
                <div className="top">
                  Leçon {String(l.number).padStart(2, '0')} · {l.duration_min} min
                </div>
                <h3>{l.title}</h3>
                <div className="sub">
                  {!unlocked && 'Verrouillée — termine la leçon précédente'}
                  {unlocked && !completed && `${l.sections.length} sections · ${l.quiz.questions.length} questions`}
                  {completed && <>Validée · <b>{state.score}/{l.quiz.max}</b></>}
                </div>
              </div>
              <div className="arrow">{unlocked && !completed ? '→' : completed ? '↻' : ''}</div>
              {!unlocked && <div className="tip">Termine la leçon précédente</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

window.HomeScreen = HomeScreen;
