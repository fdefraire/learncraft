// Distribution Craft — Quiz screen
// Renders one question at a time, then a final score screen.

const { useState } = React;

function QuizScreen({ lesson, onFinish, onBackToLesson, quizStyle }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]); // array of {selected, correct}
  const [selected, setSelected] = useState(null);
  const [validated, setValidated] = useState(false);
  const [done, setDone] = useState(false);

  const total = lesson.quiz.questions.length;
  const q = lesson.quiz.questions[idx];

  const validate = () => {
    if (selected === null) return;
    setValidated(true);
    setAnswers(prev => [...prev, { selected, correct: selected === q.correct }]);
  };

  const next = () => {
    setSelected(null);
    setValidated(false);
    if (idx + 1 >= total) {
      setDone(true);
    } else {
      setIdx(idx + 1);
    }
  };

  if (done) {
    const score = answers.filter(a => a.correct).length;
    const passing = lesson.quiz.passing;
    const max = lesson.quiz.max;
    const isPass = score >= passing;
    const verdict = score >= passing ? 'Validé.'
                  : score >= 3 ? 'À retravailler.'
                  : 'À reprendre.';
    const verdictKind = score >= passing ? 'ok'
                      : score >= 3 ? 'mid' : 'fail';
    const verdictMsg = score >= passing
      ? "Tu as les fondamentaux. La leçon suivante est débloquée — prends une pause, reviens plus tard."
      : score >= 3
      ? "Pas grave. Relire les sections clefs avant de retenter le quiz vaut mieux que forcer."
      : "Reprends la leçon depuis le début. C'est dense, c'est normal d'avoir besoin d'un second passage.";

    return (
      <div className="quiz score-screen page">
        <div className={`verdict-eyebrow ${verdictKind}`}>{verdict}</div>
        <h1>Score <em>final</em></h1>
        <div className="score-num">
          <em>{score}</em><span className="denom">/{max}</span>
        </div>
        <div className="verdict">{verdictMsg}</div>
        <div className="section-nav">
          {isPass ? (
            <button className="btn btn-primary" onClick={() => onFinish(score, true)}>
              Débloquer la suite →
            </button>
          ) : (
            <>
              <button className="btn btn-primary" onClick={() => onFinish(score, false)}>
                Recommencer le quiz
              </button>
              <button className="btn btn-ghost" onClick={onBackToLesson}>
                Relire la leçon
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz page" data-quiz-style={quizStyle}>
      <div className="back-bar">
        <button className="back-btn" onClick={onBackToLesson}>← Leçon</button>
        <div className="lesson-progress"><i style={{ width: `${((idx + (validated ? 1 : 0)) / total) * 100}%` }} /></div>
        <div className="lesson-progress-meta">Q{idx + 1}/{total}</div>
      </div>

      <div className="eyebrow muted">Quiz · {lesson.title}</div>
      <h2 className="quiz-q">{q.q}</h2>

      <div className="choices">
        {q.choices.map((c, i) => {
          let cls = 'choice';
          if (validated) {
            if (i === q.correct) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          } else if (selected === i) {
            cls += ' selected';
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={validated}
              onClick={() => !validated && setSelected(i)}
            >
              <span className="dot"></span>
              <span className="text">{c}</span>
            </button>
          );
        })}
      </div>

      {validated && (
        <div className="feedback">
          <div className={`label ${selected === q.correct ? '' : 'wrong'}`}>
            {selected === q.correct ? '✓ Correct' : '× Pas tout à fait'}
          </div>
          <p>{q.explain}</p>
        </div>
      )}

      <div className="section-nav">
        {!validated ? (
          <button className="btn btn-primary" disabled={selected === null} onClick={validate}>
            Valider ma réponse
          </button>
        ) : (
          <button className="btn btn-primary" onClick={next}>
            {idx + 1 >= total ? 'Voir mon score →' : 'Question suivante →'}
          </button>
        )}
      </div>
    </div>
  );
}

window.QuizScreen = QuizScreen;
