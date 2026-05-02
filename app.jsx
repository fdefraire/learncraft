// Distribution Craft — main app

const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "day",
  "density": "comfy",
  "score": "both",
  "cardStyle": "numero",
  "quizStyle": "cards"
}/*EDITMODE-END*/;

const THEMES   = ['day', 'night'];
const DENS     = ['cosy', 'comfy', 'airy'];
const SCORES   = ['number', 'bar', 'both'];
const CARDS    = ['numero', 'eyebrow', 'mixed'];
const QUIZSTY  = ['cards', 'radio', 'text'];

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [progress, setProgress] = useState(() => window.progressStorage.load());
  const [view, setView] = useState({ kind: 'home' }); // home | lesson | quiz
  const [justUnlocked, setJustUnlocked] = useState(null);
  const [resetSignal, setResetSignal] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', tweaks.theme === 'night' ? 'night' : 'day');
    html.setAttribute('data-density', tweaks.density);
    html.setAttribute('data-score', tweaks.score);
  }, [tweaks.theme, tweaks.density, tweaks.score]);

  const persist = (next) => {
    setProgress(next);
    window.progressStorage.save(next);
  };

  const openLesson = (lesson) => {
    setJustUnlocked(null);
    const sec = (progress.current_lesson === lesson.id) ? (progress.current_section || 0) : 0;
    setView({ kind: 'lesson', lesson, section: sec });
    persist({ ...progress, current_lesson: lesson.id, current_section: sec });
  };

  const startQuiz = (lesson) => setView({ kind: 'quiz', lesson });

  const finishQuiz = (score, isPass) => {
    const lesson = view.lesson;
    if (isPass) {
      const next = {
        ...progress,
        lessons: {
          ...progress.lessons,
          [lesson.id]: {
            completed: true,
            score,
            completed_at: new Date().toISOString()
          }
        },
        current_lesson: null,
        current_section: 0
      };
      persist(next);
      const ord = window.LESSONS.findIndex(l => l.id === lesson.id);
      const nextLesson = window.LESSONS[ord + 1];
      if (nextLesson) setJustUnlocked(nextLesson.id);
      setView({ kind: 'home' });
    } else {
      const next = {
        ...progress,
        lessons: {
          ...progress.lessons,
          [lesson.id]: { completed: false, score, attempted_at: new Date().toISOString() }
        }
      };
      persist(next);
      setView({ kind: 'quiz', lesson, retry: Date.now() });
    }
  };

  const resetProgress = () => {
    if (!confirm('Effacer toute la progression ?')) return;
    window.progressStorage.reset();
    setProgress({ ...window.progressStorage.EMPTY });
    setView({ kind: 'home' });
    setJustUnlocked(null);
    setResetSignal(s => s + 1);
  };

  return (
    <>
      <div className="bg-leaves" aria-hidden="true">
        <img src="assets/leaf-cluster-01.svg" alt="" className="l1" />
        <img src="assets/leaf-single.svg" alt="" className="l2" />
      </div>

      <main className="app">
        {view.kind === 'home' && (
          <HomeScreen
            key={'home-' + resetSignal}
            lessons={window.LESSONS}
            progress={progress}
            justUnlockedId={justUnlocked}
            cardStyle={tweaks.cardStyle}
            onOpen={openLesson}
          />
        )}

        {view.kind === 'lesson' && (
          <LessonScreen
            key={'lesson-' + view.lesson.id + '-' + resetSignal}
            lesson={view.lesson}
            initialSection={view.section || 0}
            onSectionChange={(i) => persist({ ...progress, current_lesson: view.lesson.id, current_section: i })}
            onBack={() => setView({ kind: 'home' })}
            onStartQuiz={() => startQuiz(view.lesson)}
          />
        )}

        {view.kind === 'quiz' && (
          <QuizScreen
            key={'quiz-' + view.lesson.id + '-' + (view.retry || 0)}
            lesson={view.lesson}
            quizStyle={tweaks.quizStyle}
            onFinish={finishQuiz}
            onBackToLesson={() => setView({ kind: 'lesson', lesson: view.lesson, section: 0 })}
          />
        )}

        <footer className="foot">
          <span>BeerMyself · Distribution Craft · v0.1</span>
          <button onClick={resetProgress}>Reset progression</button>
        </footer>
      </main>

      <TweaksPanel>
        <TweakSection label="Thème" />
        <TweakRadio label="Mode" value={tweaks.theme} options={THEMES}
          onChange={(v) => setTweak('theme', v)} />

        <TweakSection label="Mise en page" />
        <TweakRadio label="Densité" value={tweaks.density} options={DENS}
          onChange={(v) => setTweak('density', v)} />
        <TweakRadio label="Score" value={tweaks.score} options={SCORES}
          onChange={(v) => setTweak('score', v)} />

        <TweakSection label="Composants" />
        <TweakSelect label="Cartes leçon" value={tweaks.cardStyle} options={CARDS}
          onChange={(v) => setTweak('cardStyle', v)} />
        <TweakSelect label="Quiz" value={tweaks.quizStyle} options={QUIZSTY}
          onChange={(v) => setTweak('quizStyle', v)} />

        <TweakSection label="QA" />
        <TweakButton label="Reset progression" onClick={resetProgress} secondary />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
