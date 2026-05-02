// Storage shim — wraps localStorage with the window.storage API shape
// so future migration to Claude artefact runtime is one-line.

(function() {
  const KEY_PREFIX = 'distri-craft:';

  window.storage = {
    get(key) {
      const raw = localStorage.getItem(KEY_PREFIX + key);
      if (raw === null) {
        // Mimic window.storage behaviour: throw when key is missing.
        throw new Error(`Storage key "${key}" not found`);
      }
      try { return JSON.parse(raw); } catch (e) { return raw; }
    },
    set(key, value, opts) {
      try {
        localStorage.setItem(KEY_PREFIX + key, JSON.stringify(value));
      } catch (e) { console.warn('storage.set failed', e); }
    },
    remove(key) {
      try { localStorage.removeItem(KEY_PREFIX + key); } catch (e) {}
    },
    clearAll() {
      Object.keys(localStorage)
        .filter(k => k.startsWith(KEY_PREFIX))
        .forEach(k => localStorage.removeItem(k));
    }
  };

  // Helper for our progress key with try/catch wrapper
  window.progressStorage = {
    KEY: 'masterclass:progress',
    EMPTY: { lessons: {}, current_lesson: null, current_section: 0 },
    load() {
      try { return window.storage.get(this.KEY); }
      catch (e) { return { ...this.EMPTY }; }
    },
    save(state) {
      try { window.storage.set(this.KEY, state, { shared: false }); }
      catch (e) { console.warn('progress save failed', e); }
    },
    reset() {
      try { window.storage.remove(this.KEY); }
      catch (e) {}
    }
  };
})();
